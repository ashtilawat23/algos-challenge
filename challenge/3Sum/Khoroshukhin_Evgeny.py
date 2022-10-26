from itertools import combinations

combs=[i for i in list(combinations(nums,3)) if sum(i)==0]
sorted_combs=[sorted(i) for i in combs]
result=[]
for i in sorted_combs:
  if i not in result:
    result.append(i)

print(result)
