async function lookupAddress(provider, address) {
  return await provider.lookupAddress(address);
}

module.exports = { lookupAddress };
