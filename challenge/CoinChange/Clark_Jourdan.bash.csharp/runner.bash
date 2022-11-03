#!/bin/env bash

pushd "$(dirname "${BASH_SOURCE[0]}")" > /dev/null
    source ./solution.bash

    test_case_number=0
    while read line; do
        if (( test_case_number++ == 0 )); then
            # skip over header
            continue
        fi

        if [ "$line" == "" ]; then
            continue
        fi

        IFS=';' read -r -a test_case <<< "$line"
        if [ "${#test_case[@]}" != 3 ]; then
            echo "Bad test case received: '$line'" 1>&2
            break
        fi

        IFS=',' read -r -a coins <<< "${test_case[0]}"
        if (( "${#coins[@]}" < 1 )); then
            echo "Unable to read coins array" 1>&2
            break
        fi

        amount=${test_case[1]}
        if ! [[ "$amount" =~ [0-9]+$ || (( amount < 0 )) ]]; then
            echo "Bad amount received from test case: '$amount'"  1>&2
            break
        fi

        expected=${test_case[2]}
        if ! [[ "$expected" =~ ^-?[0-9]+$ ]] || (( expected < -1 )); then
            echo "Bad expected value received from test case: '$expected'"  1>&2
            break
        fi

        output="Coins: [${test_case[0]//,/, }] | Amount: $amount | Expected: $expected"
        result="$(coin_change "$amount" "${coins[@]}")"

        output+=" | Received: $result"

        echo "$output"

        if [ "$result" != "$expected" ]; then
            echo "Failed!" 1>&2
        fi
    done < bash_test_cases.txt
popd > /dev/null
