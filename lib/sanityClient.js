import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'bopdff8e',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skKXfWNFucx2N0Dl4JKlOcoOKsplbtDiIthjUga3z16Af0chGtdGfm7EQ5jix10ZH90D8MlrM5bmq2A2JNLEhMfx386FjHBWJOsG4FW3AXOBDaULlCEXrP60cBlm3ERW1ISARJjx0T56JZPGW2pp9FV2D7m3NtlvwlGlo9oIAo3sNKSi1Yfg',
  useCdn: false,
})