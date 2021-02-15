def multiples(a, b, start, stop, mult):
    for i in range(int(start), int(stop)+1):
        if(i%a == 0 and i%b != 0):
            mult[0] += 1
        elif(i%a != 0 and i%b == 0):
            mult[1] += 1
        elif(i%a == 0 and i%b == 0):
            mult[2] += 1
        else:
            mult[3] += 1
    return mult;

fh = open('input.txt')
a = 0
b = 0
mult = [0]*4

firstline = fh.readline().rstrip()
nums = firstline.split()
if(int(nums[0]) != int(nums[1])):
    a = int(nums[0])
    b = int(nums[1])

secondline = fh.readline().rstrip()
numsRng = secondline.split()

if(a >= 1 and len(numsRng) <= 10000):
    start = numsRng[0]
    stop = numsRng[len(numsRng)-1]

# for i in range(int(start), int(stop)+1):
#     if(i%a == 0 and i%b != 0):
#         mult[0] += 1
#     elif(i%a != 0 and i%b == 0):
#         mult[1] += 1
#     elif(i%a == 0 and i%b == 0):
#         mult[2] += 1
#     else:
#         mult[3] += 1

mult = multiples(a, b, int(start), int(stop), mult)

for j in mult:
    print(j, end=" ")
