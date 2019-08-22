
def get_size_of_longest_sequence_of_zeros(args):
    count=0
  
    for x in str(bin(args)):
        if x==0:
            return count+1
       

	return "binary representation " + str(bin(args)) + "-" + str(count)

print(get_size_of_longest_sequence_of_zeros(7)) # binary representation: 111 - 0
print(get_size_of_longest_sequence_of_zeros(8)) # binary representation: 1000 - 3
print(get_size_of_longest_sequence_of_zeros(457)) # binary representation: 111001001 - longest 2
print(get_size_of_longest_sequence_of_zeros(40)) # binary representation: 101000 - longest 3
print(get_size_of_longest_sequence_of_zeros(12546)) # binary representation: 11000100000010 - longest 6