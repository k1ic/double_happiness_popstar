declare const abi: [
  {
    "type": "function",
    "name": "popStar_PopStarSystem_init",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "popStar_PopStarSystem_interact",
    "inputs": [
      {
        "name": "default_parameters",
        "type": "tuple",
        "internalType": "struct DefaultParameters",
        "components": [
          {
            "name": "for_player",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "for_app",
            "type": "string",
            "internalType": "string"
          },
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
            "name": "color",
            "type": "string",
            "internalType": "string"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "popStar_PopStarSystem_pop",
    "inputs": [
      {
        "name": "default_parameters",
        "type": "tuple",
        "internalType": "struct DefaultParameters",
        "components": [
          {
            "name": "for_player",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "for_app",
            "type": "string",
            "internalType": "string"
          },
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
            "name": "color",
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
