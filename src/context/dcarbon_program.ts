export type DcarbonProgram = {
  version: '0.1.0'
  name: 'dcarbon_program'
  instructions: [
    {
      name: 'initAuthority'
      accounts: [
        {
          name: 'walletPda'
          isMut: true
          isSigner: false
        },
        {
          name: 'authorityPda'
          isMut: true
          isSigner: false
        },
        {
          name: 'payer'
          isMut: true
          isSigner: true
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'params'
          type: {
            defined: 'InitAuthorityParams'
          }
        },
      ]
    },
    {
      name: 'initializeCarbonState'
      accounts: [
        {
          name: 'owner'
          isMut: true
          isSigner: true
        },
        {
          name: 'mint'
          isMut: true
          isSigner: false
        },
        {
          name: 'authorityPda'
          isMut: true
          isSigner: false
        },
        {
          name: 'projectState'
          isMut: true
          isSigner: false
        },
        {
          name: 'metadataAccount'
          isMut: true
          isSigner: false
          docs: ['CHECK']
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenMetadataProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'params'
          type: {
            defined: 'InitCarbonStateParams'
          }
        },
      ]
    },
    {
      name: 'initTokenAccount'
      accounts: [
        {
          name: 'mint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'owner'
          isMut: true
          isSigner: true
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'params'
          type: {
            defined: 'InitTokenAccountParams'
          }
        },
      ]
    },
    {
      name: 'mintToken'
      accounts: [
        {
          name: 'owner'
          isMut: true
          isSigner: true
        },
        {
          name: 'mint'
          isMut: true
          isSigner: false
        },
        {
          name: 'authorityPda'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'projectState'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'sysvar'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'params'
          type: {
            defined: 'MintTokenParams'
          }
        },
      ]
    },
    {
      name: 'addDevices'
      accounts: [
        {
          name: 'owner'
          isMut: true
          isSigner: true
        },
        {
          name: 'projectState'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'params'
          type: {
            defined: 'AddDevicesParams'
          }
        },
      ]
    },
    {
      name: 'withdrawFee'
      accounts: [
        {
          name: 'mint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'admin'
          isMut: true
          isSigner: true
        },
        {
          name: 'projectState'
          isMut: true
          isSigner: false
        },
        {
          name: 'authorityPda'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'params'
          type: {
            defined: 'WithdrawFeeParams'
          }
        },
      ]
    },
    {
      name: 'enableDevice'
      accounts: [
        {
          name: 'admin'
          isMut: true
          isSigner: true
        },
        {
          name: 'projectState'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'params'
          type: {
            defined: 'UpdateConfigParams'
          }
        },
      ]
    },
    {
      name: 'suspendDevice'
      accounts: [
        {
          name: 'admin'
          isMut: true
          isSigner: true
        },
        {
          name: 'projectState'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'params'
          type: {
            defined: 'UpdateConfigParams'
          }
        },
      ]
    },
    {
      name: 'setLimit'
      accounts: [
        {
          name: 'admin'
          isMut: true
          isSigner: true
        },
        {
          name: 'projectState'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'params'
          type: {
            defined: 'SetLimitParams'
          }
        },
      ]
    },
    {
      name: 'mintNft'
      accounts: [
        {
          name: 'mintPda'
          isMut: true
          isSigner: false
          docs: ['CHECK']
        },
        {
          name: 'tokenAccountPda'
          isMut: true
          isSigner: false
          docs: ['CHECK']
        },
        {
          name: 'mintNft'
          isMut: true
          isSigner: true
        },
        {
          name: 'authorityPda'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenAccountNft'
          isMut: true
          isSigner: false
        },
        {
          name: 'buyer'
          isMut: true
          isSigner: true
        },
        {
          name: 'walletPda'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'params'
          type: {
            defined: 'MintNftParams'
          }
        },
      ]
    },
    {
      name: 'updateMetadata'
      accounts: [
        {
          name: 'mintNft'
          isMut: true
          isSigner: false
        },
        {
          name: 'authorityPda'
          isMut: true
          isSigner: false
        },
        {
          name: 'payer'
          isMut: true
          isSigner: true
        },
        {
          name: 'metadataAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'masterEditionAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenMetadataProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'params'
          type: {
            defined: 'UpdateMetadataParams'
          }
        },
      ]
    },
    {
      name: 'withdrawPool'
      accounts: [
        {
          name: 'walletPda'
          isMut: true
          isSigner: false
        },
        {
          name: 'owner'
          isMut: true
          isSigner: true
        },
        {
          name: 'authorityPda'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
      ]
      args: [
        {
          name: 'params'
          type: {
            defined: 'WithdrawPoolParams'
          }
        },
      ]
    },
  ]
  accounts: [
    {
      name: 'authorityPda'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'backendSigner'
            type: {
              array: ['u8', 64]
            }
          },
          {
            name: 'adminAddress'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'mintPda'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          },
        ]
      }
    },
    {
      name: 'projectState'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'programIndex'
            type: 'u8'
          },
          {
            name: 'mint'
            type: 'publicKey'
          },
          {
            name: 'devices'
            type: {
              vec: {
                defined: 'Device'
              }
            }
          },
          {
            name: 'admin'
            type: 'publicKey'
          },
          {
            name: 'ethAddress'
            type: {
              array: ['u8', 20]
            }
          },
          {
            name: 'fee'
            type: 'u64'
          },
          {
            name: 'feeAmount'
            type: 'u64'
          },
          {
            name: 'bump'
            type: 'u8'
          },
        ]
      }
    },
    {
      name: 'walletPda'
      type: {
        kind: 'struct'
        fields: []
      }
    },
    {
      name: 'tokenAccountPda'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          },
        ]
      }
    },
  ]
  types: [
    {
      name: 'MintNftParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'programIndex'
            type: 'u8'
          },
          {
            name: 'amount'
            type: 'u64'
          },
          {
            name: 'price'
            type: 'u64'
          },
          {
            name: 'signature'
            type: {
              array: ['u8', 64]
            }
          },
          {
            name: 'recoveryId'
            type: 'u8'
          },
          {
            name: 'projectId'
            type: 'string'
          },
          {
            name: 'certificateId'
            type: 'string'
          },
        ]
      }
    },
    {
      name: 'UpdateMetadataParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'programIndex'
            type: 'u8'
          },
          {
            name: 'name'
            type: 'string'
          },
          {
            name: 'symbol'
            type: 'string'
          },
          {
            name: 'uri'
            type: 'string'
          },
        ]
      }
    },
    {
      name: 'WithdrawPoolParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'programIndex'
            type: 'u8'
          },
        ]
      }
    },
    {
      name: 'InitAuthorityParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'programIndex'
            type: 'u8'
          },
          {
            name: 'signer'
            type: {
              array: ['u8', 64]
            }
          },
          {
            name: 'adminAddress'
            type: 'publicKey'
          },
        ]
      }
    },
    {
      name: 'InitCarbonStateParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'programIndex'
            type: 'u8'
          },
          {
            name: 'decimals'
            type: 'u8'
          },
          {
            name: 'fee'
            type: 'u64'
          },
          {
            name: 'name'
            type: 'string'
          },
          {
            name: 'symbol'
            type: 'string'
          },
          {
            name: 'uri'
            type: 'string'
          },
          {
            name: 'ethAddress'
            type: {
              array: ['u8', 20]
            }
          },
          {
            name: 'devices'
            type: {
              vec: {
                defined: 'DeviceParams'
              }
            }
          },
        ]
      }
    },
    {
      name: 'InitTokenAccountParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'programIndex'
            type: 'u8'
          },
        ]
      }
    },
    {
      name: 'AddDevicesParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'devices'
            type: {
              vec: {
                defined: 'DeviceParams'
              }
            }
          },
        ]
      }
    },
    {
      name: 'MintTokenParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'programIndex'
            type: 'u8'
          },
          {
            name: 'deviceId'
            type: {
              array: ['u8', 20]
            }
          },
          {
            name: 'amount'
            type: 'u64'
          },
          {
            name: 'nonce'
            type: 'u64'
          },
          {
            name: 'name'
            type: 'string'
          },
          {
            name: 'symbol'
            type: 'string'
          },
          {
            name: 'uri'
            type: 'string'
          },
          {
            name: 'signature'
            type: {
              array: ['u8', 64]
            }
          },
          {
            name: 'recoveryId'
            type: 'u8'
          },
        ]
      }
    },
    {
      name: 'UpdateConfigParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'deviceId'
            type: {
              array: ['u8', 20]
            }
          },
        ]
      }
    },
    {
      name: 'SetLimitParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'deviceId'
            type: {
              array: ['u8', 20]
            }
          },
          {
            name: 'limit'
            type: 'u64'
          },
        ]
      }
    },
    {
      name: 'WithdrawFeeParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'programIndex'
            type: 'u8'
          },
        ]
      }
    },
    {
      name: 'Device'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'evmAddress'
            type: {
              array: ['u8', 20]
            }
          },
          {
            name: 'isActived'
            type: 'bool'
          },
          {
            name: 'deviceType'
            type: 'u16'
          },
          {
            name: 'limitAmount'
            type: 'u64'
          },
          {
            name: 'latest'
            type: 'i64'
          },
          {
            name: 'owner'
            type: 'publicKey'
          },
          {
            name: 'nonce'
            type: 'u64'
          },
        ]
      }
    },
    {
      name: 'DeviceParams'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'evmAddress'
            type: {
              array: ['u8', 20]
            }
          },
          {
            name: 'deviceType'
            type: 'u16'
          },
          {
            name: 'limitAmount'
            type: 'u64'
          },
          {
            name: 'owner'
            type: 'string'
          },
        ]
      }
    },
  ]
  events: [
    {
      name: 'MintNftEvent'
      fields: [
        {
          name: 'owner'
          type: 'publicKey'
          index: false
        },
        {
          name: 'mint'
          type: 'publicKey'
          index: false
        },
        {
          name: 'amount'
          type: 'u64'
          index: false
        },
        {
          name: 'price'
          type: 'u64'
          index: false
        },
        {
          name: 'projectId'
          type: 'string'
          index: false
        },
        {
          name: 'certificateId'
          type: 'string'
          index: false
        },
      ]
    },
  ]
  errors: [
    {
      code: 6000
      name: 'InvalidNonce'
      msg: 'M0001'
    },
    {
      code: 6001
      name: 'AlreadyMintToday'
      msg: 'M0009'
    },
    {
      code: 6002
      name: 'WrongDeviceOwnerOrDeviceSuspended'
      msg: 'M0010'
    },
    {
      code: 6003
      name: 'DeviceNotFound'
      msg: 'M0020'
    },
    {
      code: 6004
      name: 'LimitShouldBePositive'
      msg: 'M0021'
    },
    {
      code: 6005
      name: 'WrongDeviceOwner'
      msg: 'M0023'
    },
    {
      code: 6006
      name: 'SigVerificationFailed'
      msg: 'Signature verification failed'
    },
    {
      code: 6007
      name: 'SigHeaderFailed'
      msg: 'Signature header verification failed'
    },
    {
      code: 6008
      name: 'SigInstructionFailed'
      msg: 'Signature intruction verification failed'
    },
    {
      code: 6009
      name: 'WrongSignature'
      msg: 'Wrong Signature'
    },
    {
      code: 6010
      name: 'PermissionDenied'
      msg: 'Permission Denied'
    },
  ]
  metadata: {
    address: string
  }
}

export const IDL: DcarbonProgram = {
  version: '0.1.0',
  name: 'dcarbon_program',
  instructions: [
    {
      name: 'initAuthority',
      accounts: [
        {
          name: 'walletPda',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityPda',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'InitAuthorityParams',
          },
        },
      ],
    },
    {
      name: 'initializeCarbonState',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'mint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityPda',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'projectState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'metadataAccount',
          isMut: true,
          isSigner: false,
          docs: ['CHECK'],
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenMetadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'InitCarbonStateParams',
          },
        },
      ],
    },
    {
      name: 'initTokenAccount',
      accounts: [
        {
          name: 'mint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'InitTokenAccountParams',
          },
        },
      ],
    },
    {
      name: 'mintToken',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'mint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityPda',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'projectState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'sysvar',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'MintTokenParams',
          },
        },
      ],
    },
    {
      name: 'addDevices',
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'projectState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'AddDevicesParams',
          },
        },
      ],
    },
    {
      name: 'withdrawFee',
      accounts: [
        {
          name: 'mint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'projectState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityPda',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'WithdrawFeeParams',
          },
        },
      ],
    },
    {
      name: 'enableDevice',
      accounts: [
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'projectState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'UpdateConfigParams',
          },
        },
      ],
    },
    {
      name: 'suspendDevice',
      accounts: [
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'projectState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'UpdateConfigParams',
          },
        },
      ],
    },
    {
      name: 'setLimit',
      accounts: [
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'projectState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'SetLimitParams',
          },
        },
      ],
    },
    {
      name: 'mintNft',
      accounts: [
        {
          name: 'mintPda',
          isMut: true,
          isSigner: false,
          docs: ['CHECK'],
        },
        {
          name: 'tokenAccountPda',
          isMut: true,
          isSigner: false,
          docs: ['CHECK'],
        },
        {
          name: 'mintNft',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'authorityPda',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenAccountNft',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'buyer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'walletPda',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'MintNftParams',
          },
        },
      ],
    },
    {
      name: 'updateMetadata',
      accounts: [
        {
          name: 'mintNft',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'authorityPda',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'metadataAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'masterEditionAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenMetadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'UpdateMetadataParams',
          },
        },
      ],
    },
    {
      name: 'withdrawPool',
      accounts: [
        {
          name: 'walletPda',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'authorityPda',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'params',
          type: {
            defined: 'WithdrawPoolParams',
          },
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'authorityPda',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'backendSigner',
            type: {
              array: ['u8', 64],
            },
          },
          {
            name: 'adminAddress',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'mintPda',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'projectState',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'programIndex',
            type: 'u8',
          },
          {
            name: 'mint',
            type: 'publicKey',
          },
          {
            name: 'devices',
            type: {
              vec: {
                defined: 'Device',
              },
            },
          },
          {
            name: 'admin',
            type: 'publicKey',
          },
          {
            name: 'ethAddress',
            type: {
              array: ['u8', 20],
            },
          },
          {
            name: 'fee',
            type: 'u64',
          },
          {
            name: 'feeAmount',
            type: 'u64',
          },
          {
            name: 'bump',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'walletPda',
      type: {
        kind: 'struct',
        fields: [],
      },
    },
    {
      name: 'tokenAccountPda',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
        ],
      },
    },
  ],
  types: [
    {
      name: 'MintNftParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'programIndex',
            type: 'u8',
          },
          {
            name: 'amount',
            type: 'u64',
          },
          {
            name: 'price',
            type: 'u64',
          },
          {
            name: 'signature',
            type: {
              array: ['u8', 64],
            },
          },
          {
            name: 'recoveryId',
            type: 'u8',
          },
          {
            name: 'projectId',
            type: 'string',
          },
          {
            name: 'certificateId',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'UpdateMetadataParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'programIndex',
            type: 'u8',
          },
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'symbol',
            type: 'string',
          },
          {
            name: 'uri',
            type: 'string',
          },
        ],
      },
    },
    {
      name: 'WithdrawPoolParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'programIndex',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'InitAuthorityParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'programIndex',
            type: 'u8',
          },
          {
            name: 'signer',
            type: {
              array: ['u8', 64],
            },
          },
          {
            name: 'adminAddress',
            type: 'publicKey',
          },
        ],
      },
    },
    {
      name: 'InitCarbonStateParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'programIndex',
            type: 'u8',
          },
          {
            name: 'decimals',
            type: 'u8',
          },
          {
            name: 'fee',
            type: 'u64',
          },
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'symbol',
            type: 'string',
          },
          {
            name: 'uri',
            type: 'string',
          },
          {
            name: 'ethAddress',
            type: {
              array: ['u8', 20],
            },
          },
          {
            name: 'devices',
            type: {
              vec: {
                defined: 'DeviceParams',
              },
            },
          },
        ],
      },
    },
    {
      name: 'InitTokenAccountParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'programIndex',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'AddDevicesParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'devices',
            type: {
              vec: {
                defined: 'DeviceParams',
              },
            },
          },
        ],
      },
    },
    {
      name: 'MintTokenParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'programIndex',
            type: 'u8',
          },
          {
            name: 'deviceId',
            type: {
              array: ['u8', 20],
            },
          },
          {
            name: 'amount',
            type: 'u64',
          },
          {
            name: 'nonce',
            type: 'u64',
          },
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'symbol',
            type: 'string',
          },
          {
            name: 'uri',
            type: 'string',
          },
          {
            name: 'signature',
            type: {
              array: ['u8', 64],
            },
          },
          {
            name: 'recoveryId',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'UpdateConfigParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'deviceId',
            type: {
              array: ['u8', 20],
            },
          },
        ],
      },
    },
    {
      name: 'SetLimitParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'deviceId',
            type: {
              array: ['u8', 20],
            },
          },
          {
            name: 'limit',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'WithdrawFeeParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'programIndex',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'Device',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'evmAddress',
            type: {
              array: ['u8', 20],
            },
          },
          {
            name: 'isActived',
            type: 'bool',
          },
          {
            name: 'deviceType',
            type: 'u16',
          },
          {
            name: 'limitAmount',
            type: 'u64',
          },
          {
            name: 'latest',
            type: 'i64',
          },
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'nonce',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'DeviceParams',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'evmAddress',
            type: {
              array: ['u8', 20],
            },
          },
          {
            name: 'deviceType',
            type: 'u16',
          },
          {
            name: 'limitAmount',
            type: 'u64',
          },
          {
            name: 'owner',
            type: 'string',
          },
        ],
      },
    },
  ],
  events: [
    {
      name: 'MintNftEvent',
      fields: [
        {
          name: 'owner',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'mint',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'amount',
          type: 'u64',
          index: false,
        },
        {
          name: 'price',
          type: 'u64',
          index: false,
        },
        {
          name: 'projectId',
          type: 'string',
          index: false,
        },
        {
          name: 'certificateId',
          type: 'string',
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'InvalidNonce',
      msg: 'M0001',
    },
    {
      code: 6001,
      name: 'AlreadyMintToday',
      msg: 'M0009',
    },
    {
      code: 6002,
      name: 'WrongDeviceOwnerOrDeviceSuspended',
      msg: 'M0010',
    },
    {
      code: 6003,
      name: 'DeviceNotFound',
      msg: 'M0020',
    },
    {
      code: 6004,
      name: 'LimitShouldBePositive',
      msg: 'M0021',
    },
    {
      code: 6005,
      name: 'WrongDeviceOwner',
      msg: 'M0023',
    },
    {
      code: 6006,
      name: 'SigVerificationFailed',
      msg: 'Signature verification failed',
    },
    {
      code: 6007,
      name: 'SigHeaderFailed',
      msg: 'Signature header verification failed',
    },
    {
      code: 6008,
      name: 'SigInstructionFailed',
      msg: 'Signature intruction verification failed',
    },
    {
      code: 6009,
      name: 'WrongSignature',
      msg: 'Wrong Signature',
    },
    {
      code: 6010,
      name: 'PermissionDenied',
      msg: 'Permission Denied',
    },
  ],
  metadata: {
    address: 'k2tYYVZSVqZyMaaDNTQ3owSKqTaGSmmbWRnfjnVn2ri',
  },
}
