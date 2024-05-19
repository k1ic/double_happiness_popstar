declare const abi: [
  {
    "type": "function",
    "name": "alert_player",
    "inputs": [
      {
        "name": "position",
        "type": "tuple",
        "internalType": "struct Position",
        "components": [
          {
            "name": "x",
            "type": "uint32",
            "internalType": "uint32"
          },
          {
            "name": "y",
            "type": "uint32",
            "internalType": "uint32"
          }
        ]
      },
      {
        "name": "player",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "message",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "convertToBytes32",
    "inputs": [
      {
        "name": "input",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "has_write_access",
    "inputs": [
      {
        "name": "pixel",
        "type": "tuple",
        "internalType": "struct PixelData",
        "components": [
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "timestamp",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "created_at",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "updated_at",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "color",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "text",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "action",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "app",
            "type": "string",
            "internalType": "string"
          }
        ]
      },
      {
        "name": "pixel_update",
        "type": "tuple",
        "internalType": "struct PixelUpdateData",
        "components": [
          {
            "name": "x",
            "type": "uint32",
            "internalType": "uint32"
          },
          {
            "name": "y",
            "type": "uint32",
            "internalType": "uint32"
          },
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "timestamp",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "color",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "text",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "action",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "app",
            "type": "string",
            "internalType": "string"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "init",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "process_queue",
    "inputs": [
      {
        "name": "id",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "schedule_queue",
    "inputs": [
      {
        "name": "timestamp",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "call_data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "set_instruction",
    "inputs": [
      {
        "name": "selector",
        "type": "bytes4",
        "internalType": "bytes4"
      },
      {
        "name": "instruction",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "update_app",
    "inputs": [
      {
        "name": "name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "icon",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "manifest",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "namespace",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "system_name",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "update_app_system",
    "inputs": [
      {
        "name": "new_system_addr",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "app_name",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "update_permission",
    "inputs": [
      {
        "name": "allowed_app_name",
        "type": "string",
        "internalType": "string"
      },
      {
        "name": "permission_param",
        "type": "tuple",
        "internalType": "struct PermissionsData",
        "components": [
          {
            "name": "app",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "color",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "owner",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "text",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "timestamp",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "action",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "update_pixel",
    "inputs": [
      {
        "name": "pixel_update",
        "type": "tuple",
        "internalType": "struct PixelUpdateData",
        "components": [
          {
            "name": "x",
            "type": "uint32",
            "internalType": "uint32"
          },
          {
            "name": "y",
            "type": "uint32",
            "internalType": "uint32"
          },
          {
            "name": "owner",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "timestamp",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "color",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "text",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "action",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "app",
            "type": "string",
            "internalType": "string"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
]; export default abi;
