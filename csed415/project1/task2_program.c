#include <openssl/bn.h>
#include <stdio.h>
#define NBITS 256

BIGNUM* get_rsa_private_key(BIGNUM* p, BIGNUM* q, BIGNUM* e) {
  BN_CTX* ctx = BN_CTX_new();
  BIGNUM* one = BN_new();
  BN_dec2bn(&one, "1");

  BIGNUM* minus_one_p = BN_new();
  BN_sub(minus_one_p, p, one);

  BIGNUM* minus_one_q = BN_new();
  BN_sub(minus_one_q, q, one);

  BIGNUM* multiply_value = BN_new();
  BN_mul(multiply_value, minus_one_p, minus_one_q, ctx);

  BIGNUM* result = BN_new();
  BN_mod_inverse(result, e, multiply_value, ctx);
  
  BN_CTX_free(ctx);
  return result;
}

void printBN(char* msg, BIGNUM* a) {
  /* Use BN_bn2hex(a) for hex string
   * Use BN_bn2dec(a) for decimal string */
  char* number_str = BN_bn2hex(a);
  printf("%s %s\n", msg, number_str);
  OPENSSL_free(number_str);
}

int main() {
  BIGNUM* p = BN_new();
  BIGNUM* q = BN_new();
  BIGNUM* e = BN_new();

  BN_hex2bn(&p, "F7E75FDC469067FFDC4E847C51F452DF");
  BN_hex2bn(&q, "E85CED54AF57E53E092113E62F436F4F");
  BN_hex2bn(&e, "0D88C3");

  BIGNUM* rsa_private_key = get_rsa_private_key(p, q, e);
  printBN("rsa_private_key is", rsa_private_key);

  return 0;
}
