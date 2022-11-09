#!/bin/env bash

#######################################
# Calculates the minimum number of it would take to equal the target amount.
# Arguments:
#   The target amount, the coin values as an array
# Returns:
#   The minimum number of coins it would take to equal the target amount, or -1 if it's not possible.
#######################################
function coin_change() {
    # used to visualize the changes to dp while the problem runs
    # not very useful with large numbers, but can be handy with smaller 'amounts'
    local visualize_dp=0
    local visualize_text

    # get amount from the first argument
    local amount="$1"

    # shift args to the left (dropping amount from args)
    shift

    # get the coins array from the remaining arguments
    local coins=("$@")
    local coins_length="${#coins[@]}"

    # create the dynamic-programming array
    local dp=(0)

    # setup variables to use in loops
    local i
    local j
    local coin
    local a
    local b
    local result

    # ====== sort the coins array, ascending ======
    local clean_pass=0

    local loop_end=1
    while (( clean_pass != 1 )); do
        clean_pass=1
        for (( i = 0; i < coins_length - loop_end; i++ )); do
            a=${coins[i]}
            b=${coins[i + 1]}
            if (( a > b )); then
                coins[i]=$b
                coins[i + 1]=$a
                clean_pass=0
            fi
        done

        # Decrease the end of the loop by one every iteration, since the last item
        # will be in the right spot
        (( loop_end++ ))
    done
    # ==================================

    for (( i = 1; i <= amount; i++ )); do
        for (( j = 0; j < coins_length; j++ )); do
            coin=${coins[j]}
            if (( i - coin < 0 )); then
                break
            fi

            if [ "${dp[i - coin]}" != "" ]; then
                result=$(( 1 + dp[i - coin] ))
                if [ "${dp[i]}" == "" ]; then
                    dp[i]=$result
                else
                    if (( dp[i] > result )); then
                        dp[i]=$result
                    fi
                fi
            fi

            if (( visualize_dp == 1 )); then
                visualize_text="${dp[@]}"
                echo "i = $i | coin = $coin | dp: [${visualize_text// /, }]" 1>&2
            fi
        done

        if (( visualize_dp == 1 )); then
            echo "" 1>&2
        fi
    done

    if [ "${dp[amount]}" == "" ]; then
        echo "-1"
    else
        echo "${dp[amount]}"
    fi
}

export -f coin_change
