def prime_number(n):
    primes=[] 
    for x in range(0,n):
      for y in range(1,n):
      	if x % y == 0:
          break
        else:
           primes.append(x)
    return primes

print(prime_number(20))