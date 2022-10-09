export const dappStopRegistry = {
  address: "0x7e912cbcEe54Bf7A70fA97B338Ebc79276AE3bc7",
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "buyer",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "dappId",
          type: "uint256",
        },
      ],
      name: "Bought",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "creator",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "dappId",
          type: "uint256",
        },
        {
          components: [
            {
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              internalType: "string",
              name: "popURI",
              type: "string",
            },
            {
              internalType: "string",
              name: "ceramicURI",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
          ],
          indexed: false,
          internalType: "struct IDappStopRegistry.DappInfo",
          name: "dappInfo",
          type: "tuple",
        },
      ],
      name: "Registered",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "dappId",
          type: "uint256",
        },
        {
          components: [
            {
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              internalType: "string",
              name: "popURI",
              type: "string",
            },
            {
              internalType: "string",
              name: "ceramicURI",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
          ],
          indexed: false,
          internalType: "struct IDappStopRegistry.DappInfo",
          name: "dappInfo",
          type: "tuple",
        },
      ],
      name: "Updated",
      type: "event",
    },
    {
      inputs: [],
      name: "DAPPSTOP_POP",
      outputs: [
        {
          internalType: "contract DappStopPoP",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_dappId",
          type: "uint256",
        },
      ],
      name: "buy",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "dappInfo",
      outputs: [
        {
          internalType: "address",
          name: "creator",
          type: "address",
        },
        {
          internalType: "string",
          name: "popURI",
          type: "string",
        },
        {
          internalType: "string",
          name: "ceramicURI",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_dappId",
          type: "uint256",
        },
      ],
      name: "getCeramicURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_dappId",
          type: "uint256",
        },
      ],
      name: "getCreator",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getDappCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_dappId",
          type: "uint256",
        },
      ],
      name: "getDappInfo",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              internalType: "string",
              name: "popURI",
              type: "string",
            },
            {
              internalType: "string",
              name: "ceramicURI",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
          ],
          internalType: "struct IDappStopRegistry.DappInfo",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_dappId",
          type: "uint256",
        },
      ],
      name: "getPoPURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_dappId",
          type: "uint256",
        },
      ],
      name: "getPrice",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              internalType: "string",
              name: "popURI",
              type: "string",
            },
            {
              internalType: "string",
              name: "ceramicURI",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
          ],
          internalType: "struct IDappStopRegistry.DappInfo",
          name: "_dappInfo",
          type: "tuple",
        },
      ],
      name: "register",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract DappStopPoP",
          name: "_DAPPSTOP_POP",
          type: "address",
        },
      ],
      name: "setPOP",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_dappId",
          type: "uint256",
        },
        {
          components: [
            {
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              internalType: "string",
              name: "popURI",
              type: "string",
            },
            {
              internalType: "string",
              name: "ceramicURI",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
          ],
          internalType: "struct IDappStopRegistry.DappInfo",
          name: "_dappInfo",
          type: "tuple",
        },
      ],
      name: "update",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ],
  transactionHash:
    "0x890bb5aaa82c5d50ae3e3878e341a585efa8dbf4d340ce6db1907f62f19163e8",
  receipt: {
    to: null,
    from: "0xB0853B57326e08aA536663D6aC78304c0b3E38Da",
    contractAddress: "0x7e912cbcEe54Bf7A70fA97B338Ebc79276AE3bc7",
    transactionIndex: 37,
    gasUsed: "1073977",
    logsBloom:
      "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000008000002000000000000000000000000000000000000000000000000000800000000000000000040100010000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000008000000000000000000000000040000000004000000000000000000001000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000100000",
    blockHash:
      "0x7840fc98fc315b38fb2102a457f4c626a8d301744cb7e533e2da1b15b9663379",
    transactionHash:
      "0x890bb5aaa82c5d50ae3e3878e341a585efa8dbf4d340ce6db1907f62f19163e8",
    logs: [
      {
        transactionIndex: 37,
        blockNumber: 28516030,
        transactionHash:
          "0x890bb5aaa82c5d50ae3e3878e341a585efa8dbf4d340ce6db1907f62f19163e8",
        address: "0x0000000000000000000000000000000000001010",
        topics: [
          "0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63",
          "0x0000000000000000000000000000000000000000000000000000000000001010",
          "0x000000000000000000000000b0853b57326e08aa536663d6ac78304c0b3e38da",
          "0x000000000000000000000000c275dc8be39f50d12f66b6a63629c39da5bae5bd",
        ],
        data: "0x000000000000000000000000000000000000000000000000001e2f26b24f5aee000000000000000000000000000000000000000000000002cafbfc34bbc34ee50000000000000000000000000000000000000000000009c8a0e6e8c3dc0bb343000000000000000000000000000000000000000000000002caddcd0e0973f3f70000000000000000000000000000000000000000000009c8a10517ea8e5b0e31",
        logIndex: 285,
        blockHash:
          "0x7840fc98fc315b38fb2102a457f4c626a8d301744cb7e533e2da1b15b9663379",
      },
    ],
    blockNumber: 28516030,
    cumulativeGasUsed: "9132803",
    status: 1,
    byzantium: true,
  },
  args: [],
  numDeployments: 2,
  solcInputHash: "875dad63ef68f25c04e3006c987bc4ad",
  metadata:
    '{"compiler":{"version":"0.8.17+commit.8df45f5f"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":true,"internalType":"uint256","name":"dappId","type":"uint256"}],"name":"Bought","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"uint256","name":"dappId","type":"uint256"},{"components":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"popURI","type":"string"},{"internalType":"string","name":"ceramicURI","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct IDappStopRegistry.DappInfo","name":"dappInfo","type":"tuple"}],"name":"Registered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"dappId","type":"uint256"},{"components":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"popURI","type":"string"},{"internalType":"string","name":"ceramicURI","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"indexed":false,"internalType":"struct IDappStopRegistry.DappInfo","name":"dappInfo","type":"tuple"}],"name":"Updated","type":"event"},{"inputs":[],"name":"DAPPSTOP_POP","outputs":[{"internalType":"contract DappStopPoP","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dappId","type":"uint256"}],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dappInfo","outputs":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"popURI","type":"string"},{"internalType":"string","name":"ceramicURI","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dappId","type":"uint256"}],"name":"getCeramicURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dappId","type":"uint256"}],"name":"getCreator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDappCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dappId","type":"uint256"}],"name":"getDappInfo","outputs":[{"components":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"popURI","type":"string"},{"internalType":"string","name":"ceramicURI","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct IDappStopRegistry.DappInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dappId","type":"uint256"}],"name":"getPoPURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dappId","type":"uint256"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"popURI","type":"string"},{"internalType":"string","name":"ceramicURI","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct IDappStopRegistry.DappInfo","name":"_dappInfo","type":"tuple"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract DappStopPoP","name":"_DAPPSTOP_POP","type":"address"}],"name":"setPOP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_dappId","type":"uint256"},{"components":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"string","name":"popURI","type":"string"},{"internalType":"string","name":"ceramicURI","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct IDappStopRegistry.DappInfo","name":"_dappInfo","type":"tuple"}],"name":"update","outputs":[],"stateMutability":"payable","type":"function"}],"devdoc":{"kind":"dev","methods":{"getCreator(uint256)":{"details":"Returns the creator of the dApp"},"getDappCount()":{"details":"Returns the total number of Dapps Registered"},"getDappInfo(uint256)":{"details":"Returns the dapp info"},"getPoPURI(uint256)":{"details":"Returns the PoP URI of the dApp"},"getPrice(uint256)":{"details":"Returns the price of the dApp"},"setPOP(address)":{"details":"Set the PoP address"}},"title":"DappStopRegistry","version":1},"userdoc":{"kind":"user","methods":{"buy(uint256)":{"notice":"Purchase a dapp based on the dappId."},"getCeramicURI(uint256)":{"notice":"Get information of a Dapp based on the dappId. (Ceramic URI)"}},"notice":"DappStopRegistry allows game developers to register their games on dAppStop.When a creator registers their game, a DappStopPop NFT collection is created for them.","version":1}},"settings":{"compilationTarget":{"contracts/DappStopRegistry.sol":"DappStopRegistry"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"ipfs","useLiteralContent":true},"optimizer":{"enabled":true,"runs":200},"remappings":[]},"sources":{"@openzeppelin/contracts/token/ERC1155/ERC1155.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC1155/ERC1155.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./IERC1155.sol\\";\\nimport \\"./IERC1155Receiver.sol\\";\\nimport \\"./extensions/IERC1155MetadataURI.sol\\";\\nimport \\"../../utils/Address.sol\\";\\nimport \\"../../utils/Context.sol\\";\\nimport \\"../../utils/introspection/ERC165.sol\\";\\n\\n/**\\n * @dev Implementation of the basic standard multi-token.\\n * See https://eips.ethereum.org/EIPS/eip-1155\\n * Originally based on code by Enjin: https://github.com/enjin/erc-1155\\n *\\n * _Available since v3.1._\\n */\\ncontract ERC1155 is Context, ERC165, IERC1155, IERC1155MetadataURI {\\n    using Address for address;\\n\\n    // Mapping from token ID to account balances\\n    mapping(uint256 => mapping(address => uint256)) private _balances;\\n\\n    // Mapping from account to operator approvals\\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\\n\\n    // Used as the URI for all token types by relying on ID substitution, e.g. https://token-cdn-domain/{id}.json\\n    string private _uri;\\n\\n    /**\\n     * @dev See {_setURI}.\\n     */\\n    constructor(string memory uri_) {\\n        _setURI(uri_);\\n    }\\n\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\\n        return\\n            interfaceId == type(IERC1155).interfaceId ||\\n            interfaceId == type(IERC1155MetadataURI).interfaceId ||\\n            super.supportsInterface(interfaceId);\\n    }\\n\\n    /**\\n     * @dev See {IERC1155MetadataURI-uri}.\\n     *\\n     * This implementation returns the same URI for *all* token types. It relies\\n     * on the token type ID substitution mechanism\\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].\\n     *\\n     * Clients calling this function must replace the `\\\\{id\\\\}` substring with the\\n     * actual token type ID.\\n     */\\n    function uri(uint256) public view virtual override returns (string memory) {\\n        return _uri;\\n    }\\n\\n    /**\\n     * @dev See {IERC1155-balanceOf}.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     */\\n    function balanceOf(address account, uint256 id) public view virtual override returns (uint256) {\\n        require(account != address(0), \\"ERC1155: address zero is not a valid owner\\");\\n        return _balances[id][account];\\n    }\\n\\n    /**\\n     * @dev See {IERC1155-balanceOfBatch}.\\n     *\\n     * Requirements:\\n     *\\n     * - `accounts` and `ids` must have the same length.\\n     */\\n    function balanceOfBatch(address[] memory accounts, uint256[] memory ids)\\n        public\\n        view\\n        virtual\\n        override\\n        returns (uint256[] memory)\\n    {\\n        require(accounts.length == ids.length, \\"ERC1155: accounts and ids length mismatch\\");\\n\\n        uint256[] memory batchBalances = new uint256[](accounts.length);\\n\\n        for (uint256 i = 0; i < accounts.length; ++i) {\\n            batchBalances[i] = balanceOf(accounts[i], ids[i]);\\n        }\\n\\n        return batchBalances;\\n    }\\n\\n    /**\\n     * @dev See {IERC1155-setApprovalForAll}.\\n     */\\n    function setApprovalForAll(address operator, bool approved) public virtual override {\\n        _setApprovalForAll(_msgSender(), operator, approved);\\n    }\\n\\n    /**\\n     * @dev See {IERC1155-isApprovedForAll}.\\n     */\\n    function isApprovedForAll(address account, address operator) public view virtual override returns (bool) {\\n        return _operatorApprovals[account][operator];\\n    }\\n\\n    /**\\n     * @dev See {IERC1155-safeTransferFrom}.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 id,\\n        uint256 amount,\\n        bytes memory data\\n    ) public virtual override {\\n        require(\\n            from == _msgSender() || isApprovedForAll(from, _msgSender()),\\n            \\"ERC1155: caller is not token owner nor approved\\"\\n        );\\n        _safeTransferFrom(from, to, id, amount, data);\\n    }\\n\\n    /**\\n     * @dev See {IERC1155-safeBatchTransferFrom}.\\n     */\\n    function safeBatchTransferFrom(\\n        address from,\\n        address to,\\n        uint256[] memory ids,\\n        uint256[] memory amounts,\\n        bytes memory data\\n    ) public virtual override {\\n        require(\\n            from == _msgSender() || isApprovedForAll(from, _msgSender()),\\n            \\"ERC1155: caller is not token owner nor approved\\"\\n        );\\n        _safeBatchTransferFrom(from, to, ids, amounts, data);\\n    }\\n\\n    /**\\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\\n     *\\n     * Emits a {TransferSingle} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\n     * acceptance magic value.\\n     */\\n    function _safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 id,\\n        uint256 amount,\\n        bytes memory data\\n    ) internal virtual {\\n        require(to != address(0), \\"ERC1155: transfer to the zero address\\");\\n\\n        address operator = _msgSender();\\n        uint256[] memory ids = _asSingletonArray(id);\\n        uint256[] memory amounts = _asSingletonArray(amount);\\n\\n        _beforeTokenTransfer(operator, from, to, ids, amounts, data);\\n\\n        uint256 fromBalance = _balances[id][from];\\n        require(fromBalance >= amount, \\"ERC1155: insufficient balance for transfer\\");\\n        unchecked {\\n            _balances[id][from] = fromBalance - amount;\\n        }\\n        _balances[id][to] += amount;\\n\\n        emit TransferSingle(operator, from, to, id, amount);\\n\\n        _afterTokenTransfer(operator, from, to, ids, amounts, data);\\n\\n        _doSafeTransferAcceptanceCheck(operator, from, to, id, amount, data);\\n    }\\n\\n    /**\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_safeTransferFrom}.\\n     *\\n     * Emits a {TransferBatch} event.\\n     *\\n     * Requirements:\\n     *\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\n     * acceptance magic value.\\n     */\\n    function _safeBatchTransferFrom(\\n        address from,\\n        address to,\\n        uint256[] memory ids,\\n        uint256[] memory amounts,\\n        bytes memory data\\n    ) internal virtual {\\n        require(ids.length == amounts.length, \\"ERC1155: ids and amounts length mismatch\\");\\n        require(to != address(0), \\"ERC1155: transfer to the zero address\\");\\n\\n        address operator = _msgSender();\\n\\n        _beforeTokenTransfer(operator, from, to, ids, amounts, data);\\n\\n        for (uint256 i = 0; i < ids.length; ++i) {\\n            uint256 id = ids[i];\\n            uint256 amount = amounts[i];\\n\\n            uint256 fromBalance = _balances[id][from];\\n            require(fromBalance >= amount, \\"ERC1155: insufficient balance for transfer\\");\\n            unchecked {\\n                _balances[id][from] = fromBalance - amount;\\n            }\\n            _balances[id][to] += amount;\\n        }\\n\\n        emit TransferBatch(operator, from, to, ids, amounts);\\n\\n        _afterTokenTransfer(operator, from, to, ids, amounts, data);\\n\\n        _doSafeBatchTransferAcceptanceCheck(operator, from, to, ids, amounts, data);\\n    }\\n\\n    /**\\n     * @dev Sets a new URI for all token types, by relying on the token type ID\\n     * substitution mechanism\\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata[defined in the EIP].\\n     *\\n     * By this mechanism, any occurrence of the `\\\\{id\\\\}` substring in either the\\n     * URI or any of the amounts in the JSON file at said URI will be replaced by\\n     * clients with the token type ID.\\n     *\\n     * For example, the `https://token-cdn-domain/\\\\{id\\\\}.json` URI would be\\n     * interpreted by clients as\\n     * `https://token-cdn-domain/000000000000000000000000000000000000000000000000000000000004cce0.json`\\n     * for token type ID 0x4cce0.\\n     *\\n     * See {uri}.\\n     *\\n     * Because these URIs cannot be meaningfully represented by the {URI} event,\\n     * this function emits no events.\\n     */\\n    function _setURI(string memory newuri) internal virtual {\\n        _uri = newuri;\\n    }\\n\\n    /**\\n     * @dev Creates `amount` tokens of token type `id`, and assigns them to `to`.\\n     *\\n     * Emits a {TransferSingle} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\n     * acceptance magic value.\\n     */\\n    function _mint(\\n        address to,\\n        uint256 id,\\n        uint256 amount,\\n        bytes memory data\\n    ) internal virtual {\\n        require(to != address(0), \\"ERC1155: mint to the zero address\\");\\n\\n        address operator = _msgSender();\\n        uint256[] memory ids = _asSingletonArray(id);\\n        uint256[] memory amounts = _asSingletonArray(amount);\\n\\n        _beforeTokenTransfer(operator, address(0), to, ids, amounts, data);\\n\\n        _balances[id][to] += amount;\\n        emit TransferSingle(operator, address(0), to, id, amount);\\n\\n        _afterTokenTransfer(operator, address(0), to, ids, amounts, data);\\n\\n        _doSafeTransferAcceptanceCheck(operator, address(0), to, id, amount, data);\\n    }\\n\\n    /**\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_mint}.\\n     *\\n     * Emits a {TransferBatch} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `ids` and `amounts` must have the same length.\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\n     * acceptance magic value.\\n     */\\n    function _mintBatch(\\n        address to,\\n        uint256[] memory ids,\\n        uint256[] memory amounts,\\n        bytes memory data\\n    ) internal virtual {\\n        require(to != address(0), \\"ERC1155: mint to the zero address\\");\\n        require(ids.length == amounts.length, \\"ERC1155: ids and amounts length mismatch\\");\\n\\n        address operator = _msgSender();\\n\\n        _beforeTokenTransfer(operator, address(0), to, ids, amounts, data);\\n\\n        for (uint256 i = 0; i < ids.length; i++) {\\n            _balances[ids[i]][to] += amounts[i];\\n        }\\n\\n        emit TransferBatch(operator, address(0), to, ids, amounts);\\n\\n        _afterTokenTransfer(operator, address(0), to, ids, amounts, data);\\n\\n        _doSafeBatchTransferAcceptanceCheck(operator, address(0), to, ids, amounts, data);\\n    }\\n\\n    /**\\n     * @dev Destroys `amount` tokens of token type `id` from `from`\\n     *\\n     * Emits a {TransferSingle} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `from` cannot be the zero address.\\n     * - `from` must have at least `amount` tokens of token type `id`.\\n     */\\n    function _burn(\\n        address from,\\n        uint256 id,\\n        uint256 amount\\n    ) internal virtual {\\n        require(from != address(0), \\"ERC1155: burn from the zero address\\");\\n\\n        address operator = _msgSender();\\n        uint256[] memory ids = _asSingletonArray(id);\\n        uint256[] memory amounts = _asSingletonArray(amount);\\n\\n        _beforeTokenTransfer(operator, from, address(0), ids, amounts, \\"\\");\\n\\n        uint256 fromBalance = _balances[id][from];\\n        require(fromBalance >= amount, \\"ERC1155: burn amount exceeds balance\\");\\n        unchecked {\\n            _balances[id][from] = fromBalance - amount;\\n        }\\n\\n        emit TransferSingle(operator, from, address(0), id, amount);\\n\\n        _afterTokenTransfer(operator, from, address(0), ids, amounts, \\"\\");\\n    }\\n\\n    /**\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {_burn}.\\n     *\\n     * Emits a {TransferBatch} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `ids` and `amounts` must have the same length.\\n     */\\n    function _burnBatch(\\n        address from,\\n        uint256[] memory ids,\\n        uint256[] memory amounts\\n    ) internal virtual {\\n        require(from != address(0), \\"ERC1155: burn from the zero address\\");\\n        require(ids.length == amounts.length, \\"ERC1155: ids and amounts length mismatch\\");\\n\\n        address operator = _msgSender();\\n\\n        _beforeTokenTransfer(operator, from, address(0), ids, amounts, \\"\\");\\n\\n        for (uint256 i = 0; i < ids.length; i++) {\\n            uint256 id = ids[i];\\n            uint256 amount = amounts[i];\\n\\n            uint256 fromBalance = _balances[id][from];\\n            require(fromBalance >= amount, \\"ERC1155: burn amount exceeds balance\\");\\n            unchecked {\\n                _balances[id][from] = fromBalance - amount;\\n            }\\n        }\\n\\n        emit TransferBatch(operator, from, address(0), ids, amounts);\\n\\n        _afterTokenTransfer(operator, from, address(0), ids, amounts, \\"\\");\\n    }\\n\\n    /**\\n     * @dev Approve `operator` to operate on all of `owner` tokens\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     */\\n    function _setApprovalForAll(\\n        address owner,\\n        address operator,\\n        bool approved\\n    ) internal virtual {\\n        require(owner != operator, \\"ERC1155: setting approval status for self\\");\\n        _operatorApprovals[owner][operator] = approved;\\n        emit ApprovalForAll(owner, operator, approved);\\n    }\\n\\n    /**\\n     * @dev Hook that is called before any token transfer. This includes minting\\n     * and burning, as well as batched variants.\\n     *\\n     * The same hook is called on both single and batched variants. For single\\n     * transfers, the length of the `ids` and `amounts` arrays will be 1.\\n     *\\n     * Calling conditions (for each `id` and `amount` pair):\\n     *\\n     * - When `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\\n     * of token type `id` will be  transferred to `to`.\\n     * - When `from` is zero, `amount` tokens of token type `id` will be minted\\n     * for `to`.\\n     * - when `to` is zero, `amount` of ``from``\'s tokens of token type `id`\\n     * will be burned.\\n     * - `from` and `to` are never both zero.\\n     * - `ids` and `amounts` have the same, non-zero length.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _beforeTokenTransfer(\\n        address operator,\\n        address from,\\n        address to,\\n        uint256[] memory ids,\\n        uint256[] memory amounts,\\n        bytes memory data\\n    ) internal virtual {}\\n\\n    /**\\n     * @dev Hook that is called after any token transfer. This includes minting\\n     * and burning, as well as batched variants.\\n     *\\n     * The same hook is called on both single and batched variants. For single\\n     * transfers, the length of the `id` and `amount` arrays will be 1.\\n     *\\n     * Calling conditions (for each `id` and `amount` pair):\\n     *\\n     * - When `from` and `to` are both non-zero, `amount` of ``from``\'s tokens\\n     * of token type `id` will be  transferred to `to`.\\n     * - When `from` is zero, `amount` tokens of token type `id` will be minted\\n     * for `to`.\\n     * - when `to` is zero, `amount` of ``from``\'s tokens of token type `id`\\n     * will be burned.\\n     * - `from` and `to` are never both zero.\\n     * - `ids` and `amounts` have the same, non-zero length.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _afterTokenTransfer(\\n        address operator,\\n        address from,\\n        address to,\\n        uint256[] memory ids,\\n        uint256[] memory amounts,\\n        bytes memory data\\n    ) internal virtual {}\\n\\n    function _doSafeTransferAcceptanceCheck(\\n        address operator,\\n        address from,\\n        address to,\\n        uint256 id,\\n        uint256 amount,\\n        bytes memory data\\n    ) private {\\n        if (to.isContract()) {\\n            try IERC1155Receiver(to).onERC1155Received(operator, from, id, amount, data) returns (bytes4 response) {\\n                if (response != IERC1155Receiver.onERC1155Received.selector) {\\n                    revert(\\"ERC1155: ERC1155Receiver rejected tokens\\");\\n                }\\n            } catch Error(string memory reason) {\\n                revert(reason);\\n            } catch {\\n                revert(\\"ERC1155: transfer to non ERC1155Receiver implementer\\");\\n            }\\n        }\\n    }\\n\\n    function _doSafeBatchTransferAcceptanceCheck(\\n        address operator,\\n        address from,\\n        address to,\\n        uint256[] memory ids,\\n        uint256[] memory amounts,\\n        bytes memory data\\n    ) private {\\n        if (to.isContract()) {\\n            try IERC1155Receiver(to).onERC1155BatchReceived(operator, from, ids, amounts, data) returns (\\n                bytes4 response\\n            ) {\\n                if (response != IERC1155Receiver.onERC1155BatchReceived.selector) {\\n                    revert(\\"ERC1155: ERC1155Receiver rejected tokens\\");\\n                }\\n            } catch Error(string memory reason) {\\n                revert(reason);\\n            } catch {\\n                revert(\\"ERC1155: transfer to non ERC1155Receiver implementer\\");\\n            }\\n        }\\n    }\\n\\n    function _asSingletonArray(uint256 element) private pure returns (uint256[] memory) {\\n        uint256[] memory array = new uint256[](1);\\n        array[0] = element;\\n\\n        return array;\\n    }\\n}\\n","keccak256":"0x447a21c87433c0f11252912313a96f3454629ef88cca7a4eefbb283b3ec409f9","license":"MIT"},"@openzeppelin/contracts/token/ERC1155/IERC1155.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.7.0) (token/ERC1155/IERC1155.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../../utils/introspection/IERC165.sol\\";\\n\\n/**\\n * @dev Required interface of an ERC1155 compliant contract, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-1155[EIP].\\n *\\n * _Available since v3.1._\\n */\\ninterface IERC1155 is IERC165 {\\n    /**\\n     * @dev Emitted when `value` tokens of token type `id` are transferred from `from` to `to` by `operator`.\\n     */\\n    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);\\n\\n    /**\\n     * @dev Equivalent to multiple {TransferSingle} events, where `operator`, `from` and `to` are the same for all\\n     * transfers.\\n     */\\n    event TransferBatch(\\n        address indexed operator,\\n        address indexed from,\\n        address indexed to,\\n        uint256[] ids,\\n        uint256[] values\\n    );\\n\\n    /**\\n     * @dev Emitted when `account` grants or revokes permission to `operator` to transfer their tokens, according to\\n     * `approved`.\\n     */\\n    event ApprovalForAll(address indexed account, address indexed operator, bool approved);\\n\\n    /**\\n     * @dev Emitted when the URI for token type `id` changes to `value`, if it is a non-programmatic URI.\\n     *\\n     * If an {URI} event was emitted for `id`, the standard\\n     * https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that `value` will equal the value\\n     * returned by {IERC1155MetadataURI-uri}.\\n     */\\n    event URI(string value, uint256 indexed id);\\n\\n    /**\\n     * @dev Returns the amount of tokens of token type `id` owned by `account`.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     */\\n    function balanceOf(address account, uint256 id) external view returns (uint256);\\n\\n    /**\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.\\n     *\\n     * Requirements:\\n     *\\n     * - `accounts` and `ids` must have the same length.\\n     */\\n    function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids)\\n        external\\n        view\\n        returns (uint256[] memory);\\n\\n    /**\\n     * @dev Grants or revokes permission to `operator` to transfer the caller\'s tokens, according to `approved`,\\n     *\\n     * Emits an {ApprovalForAll} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `operator` cannot be the caller.\\n     */\\n    function setApprovalForAll(address operator, bool approved) external;\\n\\n    /**\\n     * @dev Returns true if `operator` is approved to transfer ``account``\'s tokens.\\n     *\\n     * See {setApprovalForAll}.\\n     */\\n    function isApprovedForAll(address account, address operator) external view returns (bool);\\n\\n    /**\\n     * @dev Transfers `amount` tokens of token type `id` from `from` to `to`.\\n     *\\n     * Emits a {TransferSingle} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     * - If the caller is not `from`, it must have been approved to spend ``from``\'s tokens via {setApprovalForAll}.\\n     * - `from` must have a balance of tokens of type `id` of at least `amount`.\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the\\n     * acceptance magic value.\\n     */\\n    function safeTransferFrom(\\n        address from,\\n        address to,\\n        uint256 id,\\n        uint256 amount,\\n        bytes calldata data\\n    ) external;\\n\\n    /**\\n     * @dev xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.\\n     *\\n     * Emits a {TransferBatch} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `ids` and `amounts` must have the same length.\\n     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the\\n     * acceptance magic value.\\n     */\\n    function safeBatchTransferFrom(\\n        address from,\\n        address to,\\n        uint256[] calldata ids,\\n        uint256[] calldata amounts,\\n        bytes calldata data\\n    ) external;\\n}\\n","keccak256":"0x6392f2cfe3a5ee802227fe7a2dfd47096d881aec89bddd214b35c5b46d3cd941","license":"MIT"},"@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC1155/IERC1155Receiver.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../../utils/introspection/IERC165.sol\\";\\n\\n/**\\n * @dev _Available since v3.1._\\n */\\ninterface IERC1155Receiver is IERC165 {\\n    /**\\n     * @dev Handles the receipt of a single ERC1155 token type. This function is\\n     * called at the end of a `safeTransferFrom` after the balance has been updated.\\n     *\\n     * NOTE: To accept the transfer, this must return\\n     * `bytes4(keccak256(\\"onERC1155Received(address,address,uint256,uint256,bytes)\\"))`\\n     * (i.e. 0xf23a6e61, or its own function selector).\\n     *\\n     * @param operator The address which initiated the transfer (i.e. msg.sender)\\n     * @param from The address which previously owned the token\\n     * @param id The ID of the token being transferred\\n     * @param value The amount of tokens being transferred\\n     * @param data Additional data with no specified format\\n     * @return `bytes4(keccak256(\\"onERC1155Received(address,address,uint256,uint256,bytes)\\"))` if transfer is allowed\\n     */\\n    function onERC1155Received(\\n        address operator,\\n        address from,\\n        uint256 id,\\n        uint256 value,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n\\n    /**\\n     * @dev Handles the receipt of a multiple ERC1155 token types. This function\\n     * is called at the end of a `safeBatchTransferFrom` after the balances have\\n     * been updated.\\n     *\\n     * NOTE: To accept the transfer(s), this must return\\n     * `bytes4(keccak256(\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\"))`\\n     * (i.e. 0xbc197c81, or its own function selector).\\n     *\\n     * @param operator The address which initiated the batch transfer (i.e. msg.sender)\\n     * @param from The address which previously owned the token\\n     * @param ids An array containing ids of each token being transferred (order and length must match values array)\\n     * @param values An array containing amounts of each token being transferred (order and length must match ids array)\\n     * @param data Additional data with no specified format\\n     * @return `bytes4(keccak256(\\"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)\\"))` if transfer is allowed\\n     */\\n    function onERC1155BatchReceived(\\n        address operator,\\n        address from,\\n        uint256[] calldata ids,\\n        uint256[] calldata values,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n}\\n","keccak256":"0xeb373f1fdc7b755c6a750123a9b9e3a8a02c1470042fd6505d875000a80bde0b","license":"MIT"},"@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC1155/extensions/IERC1155MetadataURI.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../IERC1155.sol\\";\\n\\n/**\\n * @dev Interface of the optional ERC1155MetadataExtension interface, as defined\\n * in the https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[EIP].\\n *\\n * _Available since v3.1._\\n */\\ninterface IERC1155MetadataURI is IERC1155 {\\n    /**\\n     * @dev Returns the URI for token type `id`.\\n     *\\n     * If the `\\\\{id\\\\}` substring is present in the URI, it must be replaced by\\n     * clients with the actual token type ID.\\n     */\\n    function uri(uint256 id) external view returns (string memory);\\n}\\n","keccak256":"0xa66d18b9a85458d28fc3304717964502ae36f7f8a2ff35bc83f6f85d74b03574","license":"MIT"},"@openzeppelin/contracts/utils/Address.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.7.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.1;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * You shouldn\'t rely on `isContract` to protect against flash loan attacks!\\n     *\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\n     * constructor.\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize/address.code.length, which returns 0\\n        // for contracts in construction, since the code is only stored at the end\\n        // of the constructor execution.\\n\\n        return account.code.length > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\"Address: insufficient balance\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\"\\");\\n        require(success, \\"Address: unable to send value, recipient may have reverted\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCall(target, data, \\"Address: low-level call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\"Address: low-level call with value failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\"Address: insufficient balance for call\\");\\n        require(isContract(target), \\"Address: call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\"Address: low-level static call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        require(isContract(target), \\"Address: static call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\"Address: low-level delegate call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(isContract(target), \\"Address: delegate call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\\n     * revert reason using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            // Look for revert reason and bubble it up if present\\n            if (returndata.length > 0) {\\n                // The easiest way to bubble the revert reason is using memory via assembly\\n                /// @solidity memory-safe-assembly\\n                assembly {\\n                    let returndata_size := mload(returndata)\\n                    revert(add(32, returndata), returndata_size)\\n                }\\n            } else {\\n                revert(errorMessage);\\n            }\\n        }\\n    }\\n}\\n","keccak256":"0xd6153ce99bcdcce22b124f755e72553295be6abcd63804cfdffceb188b8bef10","license":"MIT"},"@openzeppelin/contracts/utils/Context.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n}\\n","keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT"},"@openzeppelin/contracts/utils/introspection/ERC165.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./IERC165.sol\\";\\n\\n/**\\n * @dev Implementation of the {IERC165} interface.\\n *\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\n * for the additional interface id that will be supported. For example:\\n *\\n * ```solidity\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\n * }\\n * ```\\n *\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\n */\\nabstract contract ERC165 is IERC165 {\\n    /**\\n     * @dev See {IERC165-supportsInterface}.\\n     */\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\n        return interfaceId == type(IERC165).interfaceId;\\n    }\\n}\\n","keccak256":"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b","license":"MIT"},"@openzeppelin/contracts/utils/introspection/IERC165.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC165 standard, as defined in the\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\n *\\n * Implementers can declare support of contract interfaces, which can then be\\n * queried by others ({ERC165Checker}).\\n *\\n * For an implementation, see {ERC165}.\\n */\\ninterface IERC165 {\\n    /**\\n     * @dev Returns true if this contract implements the interface defined by\\n     * `interfaceId`. See the corresponding\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\n     * to learn more about how these ids are created.\\n     *\\n     * This function call must use less than 30 000 gas.\\n     */\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\n}\\n","keccak256":"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1","license":"MIT"},"contracts/DappStopPoP.sol":{"content":"// SPDX-License-Identifier: MIT\\r\\npragma solidity 0.8.17;\\r\\n\\r\\n/*--------------------------------------------------------------\\r\\n ______                    ______                   \\r\\n(______)                  / _____) _                 @d1onys1us\\r\\n _     _ _____ ____  ____( (____ _| |_ ___  ____     @2manslkh\\r\\n| |   | (____ |  _ \\\\|  _ \\\\\\\\____ (_   _/ _ \\\\|  _ \\\\    @MorikiKamio\\r\\n| |__/ // ___ | |_| | |_| _____) )| || |_| | |_| |   @yukiwaki\\r\\n|_____/ \\\\_____|  __/|  __(______/  \\\\__\\\\___/|  __/ \\r\\n              |_|   |_|                    |_|    ETHBOGOTA2022                             \\r\\n----------------------------------------------------------------*/\\r\\n\\r\\nimport \\"@openzeppelin/contracts/token/ERC1155/ERC1155.sol\\";\\r\\nimport \\"./interface/IDappStopPoP.sol\\";\\r\\n\\r\\n/// @title DappStopPoP\\r\\n/// @notice DappStopPoP is a non-transferrable NFT that indicates a proof of purchase of a dApp on dAppStop.\\r\\ncontract DappStopPoP is ERC1155, IDappStopPoP {\\r\\n    mapping(uint256 => address) public creators;\\r\\n    mapping(uint256 => uint256) public tokenSupply;\\r\\n    // Each individual app will have a customUri\\r\\n    mapping(uint256 => string) public customUri;\\r\\n\\r\\n    // Contract name\\r\\n    string public name;\\r\\n    string public symbol;\\r\\n    // Dappstop Registry Address\\r\\n    address public REGISTRY;\\r\\n    // Token Index\\r\\n    uint256 public index;\\r\\n\\r\\n    /**\\r\\n     * @dev Require msg.sender to be the registry\\r\\n     */\\r\\n    modifier registryOnly() {\\r\\n        require(msg.sender == REGISTRY, \\"DappStopPoP: Registry Only\\");\\r\\n        _;\\r\\n    }\\r\\n\\r\\n    constructor() ERC1155(\\"\\") {\\r\\n        name = \\"DappStopPoP\\";\\r\\n        symbol = \\"DSPOP\\";\\r\\n    }\\r\\n\\r\\n    function setRegistry(address registry) external {\\r\\n        require(REGISTRY == address(0), \\"DappStopPoP: Registry Already Set!\\");\\r\\n        REGISTRY = registry;\\r\\n    }\\r\\n\\r\\n    function updateURI(uint256 _id, string memory _uri) external registryOnly {\\r\\n        customUri[_id] = _uri;\\r\\n    }\\r\\n\\r\\n    function uri(uint256 _id) public view override returns (string memory) {\\r\\n        require(_exists(_id), \\"DappStopPoP: Non-existent token\\");\\r\\n        // We have to convert string to bytes to check for existence\\r\\n        return customUri[_id];\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the total quantity for a token ID\\r\\n     * @param _id uint256 ID of the token to query\\r\\n     * @return amount of token in existence\\r\\n     */\\r\\n    function totalSupply(uint256 _id) public view returns (uint256) {\\r\\n        return tokenSupply[_id];\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the current token Index\\r\\n     * @return Current token index\\r\\n     */\\r\\n    function tokenIndex() public view returns (uint256) {\\r\\n        return index;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Creates a new token\\r\\n     * @param _creator address of the creator of the token\\r\\n     * @param _uri string URI for the token\\r\\n     * @return tokenId ID of the token\\r\\n     */\\r\\n    function create(address _creator, string memory _uri)\\r\\n        public\\r\\n        registryOnly\\r\\n        returns (uint256)\\r\\n    {\\r\\n        uint256 _id = index;\\r\\n        creators[_id] = _creator;\\r\\n\\r\\n        if (bytes(_uri).length > 0) {\\r\\n            customUri[_id] = _uri;\\r\\n            emit URI(_uri, _id);\\r\\n        }\\r\\n\\r\\n        index++;\\r\\n        return _id;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Mints a token\\r\\n     * @param _to address of the future owner of the token\\r\\n     * @param _id uint256 ID of the token to mint\\r\\n     * @param _data bytes data to pass if receiver is contract\\r\\n     */\\r\\n    function mint(\\r\\n        address _to,\\r\\n        uint256 _id,\\r\\n        bytes memory _data\\r\\n    ) external payable registryOnly {\\r\\n        require(_exists(_id), \\"DappStopPoP: Non-existent token!\\");\\r\\n        require(balanceOf(_to, _id) == 0, \\"DappStopPoP: Already minted!\\");\\r\\n        _mint(_to, _id, 1, _data);\\r\\n        tokenSupply[_id] += 1;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns whether the specified token exists by checking to see if it has a creator\\r\\n     * @param _id uint256 ID of the token to query the existence of\\r\\n     * @return bool whether the token exists\\r\\n     */\\r\\n    function _exists(uint256 _id) internal view returns (bool) {\\r\\n        return creators[_id] != address(0);\\r\\n    }\\r\\n\\r\\n    function exists(uint256 _id) external view returns (bool) {\\r\\n        return _exists(_id);\\r\\n    }\\r\\n}\\r\\n","keccak256":"0xd343394db6705444324f8cb549abfa19853e475ffe3a7e4a5e7c9e2688e0ef83","license":"MIT"},"contracts/DappStopRegistry.sol":{"content":"// SPDX-License-Identifier: MIT\\r\\npragma solidity 0.8.17;\\r\\n\\r\\n/**--------------------------------------------------------------\\r\\n ______                    ______                   \\r\\n(______)                  / _____) _                 @d1onys1us\\r\\n _     _ _____ ____  ____( (____ _| |_ ___  ____     @2manslkh\\r\\n| |   | (____ |  _ \\\\|  _ \\\\\\\\____ (_   _/ _ \\\\|  _ \\\\    @MorikiKamio\\r\\n| |__/ // ___ | |_| | |_| _____) )| || |_| | |_| |   @yukiwaki\\r\\n|_____/ \\\\_____|  __/|  __(______/  \\\\__\\\\___/|  __/ \\r\\n              |_|   |_|                    |_|    ETHBOGOTA2022                             \\r\\n----------------------------------------------------------------*/\\r\\n\\r\\nimport \\"./DappStopPoP.sol\\";\\r\\nimport \\"./interface/IDappStopRegistry.sol\\";\\r\\n\\r\\n/// @title DappStopRegistry\\r\\n/// @notice DappStopRegistry allows game developers to register their games on dAppStop.\\r\\n/// @notice When a creator registers their game, a DappStopPop NFT collection is created for them.\\r\\ncontract DappStopRegistry is IDappStopRegistry {\\r\\n    DappStopPoP public DAPPSTOP_POP;\\r\\n\\r\\n    mapping(uint256 => DappInfo) public dappInfo;\\r\\n\\r\\n    event Bought(address indexed buyer, uint256 indexed dappId);\\r\\n    event Registered(\\r\\n        address indexed creator,\\r\\n        uint256 indexed dappId,\\r\\n        DappInfo dappInfo\\r\\n    );\\r\\n    event Updated(uint256 indexed dappId, DappInfo dappInfo);\\r\\n\\r\\n    constructor() {}\\r\\n\\r\\n    function buy(uint256 _dappId) external payable override {\\r\\n        require(\\r\\n            msg.value == getPrice(_dappId),\\r\\n            \\"DappStopRegistry: Insufficient ETH!\\"\\r\\n        );\\r\\n\\r\\n        // Transfer ETH to creator\\r\\n        payable(getCreator(_dappId)).transfer(msg.value);\\r\\n        DAPPSTOP_POP.mint(msg.sender, _dappId, \\"\\");\\r\\n        emit Bought(msg.sender, _dappId);\\r\\n    }\\r\\n\\r\\n    function register(DappInfo memory _dappInfo) external override {\\r\\n        uint256 dappId = DAPPSTOP_POP.tokenIndex();\\r\\n        dappInfo[dappId] = _dappInfo;\\r\\n\\r\\n        require(\\r\\n            _dappInfo.creator != address(0),\\r\\n            \\"DappStopRegistry: Invalid creator address!\\"\\r\\n        );\\r\\n        require(\\r\\n            bytes(_dappInfo.popURI).length > 0,\\r\\n            \\"DappStopRegistry: Invalid popURI!\\"\\r\\n        );\\r\\n        require(\\r\\n            bytes(_dappInfo.ceramicURI).length > 0,\\r\\n            \\"DappStopRegistry: Invalid ceramicURI!\\"\\r\\n        );\\r\\n\\r\\n        DAPPSTOP_POP.create(_dappInfo.creator, _dappInfo.popURI);\\r\\n\\r\\n        emit Registered(_dappInfo.creator, dappId, _dappInfo);\\r\\n    }\\r\\n\\r\\n    function update(uint256 _dappId, DappInfo memory _dappInfo)\\r\\n        external\\r\\n        payable\\r\\n        override\\r\\n    {\\r\\n        require(\\r\\n            msg.sender == getCreator(_dappId),\\r\\n            \\"DappStopRegistry: You must be the creator of this dApp\\"\\r\\n        );\\r\\n        require(\\r\\n            _dappInfo.creator != address(0),\\r\\n            \\"DappStopRegistry: Invalid creator address!\\"\\r\\n        );\\r\\n        require(\\r\\n            bytes(_dappInfo.popURI).length > 0,\\r\\n            \\"DappStopRegistry: Invalid popURI!\\"\\r\\n        );\\r\\n        require(\\r\\n            bytes(_dappInfo.ceramicURI).length > 0,\\r\\n            \\"DappStopRegistry: Invalid ceramicURI!\\"\\r\\n        );\\r\\n\\r\\n        dappInfo[_dappId] = _dappInfo;\\r\\n        DAPPSTOP_POP.updateURI(_dappId, _dappInfo.popURI);\\r\\n\\r\\n        emit Updated(_dappId, _dappInfo);\\r\\n    }\\r\\n\\r\\n    function getCeramicURI(uint256 _dappId)\\r\\n        external\\r\\n        view\\r\\n        override\\r\\n        returns (string memory)\\r\\n    {\\r\\n        return dappInfo[_dappId].ceramicURI;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the PoP URI of the dApp\\r\\n     */\\r\\n    function getPoPURI(uint256 _dappId)\\r\\n        external\\r\\n        view\\r\\n        override\\r\\n        returns (string memory)\\r\\n    {\\r\\n        return dappInfo[_dappId].popURI;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the price of the dApp\\r\\n     */\\r\\n    function getPrice(uint256 _dappId) public view override returns (uint256) {\\r\\n        return dappInfo[_dappId].price;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the creator of the dApp\\r\\n     */\\r\\n    function getCreator(uint256 _dappId)\\r\\n        public\\r\\n        view\\r\\n        override\\r\\n        returns (address)\\r\\n    {\\r\\n        return dappInfo[_dappId].creator;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the total number of Dapps Registered\\r\\n     */\\r\\n    function getDappCount() external view override returns (uint256) {\\r\\n        return DAPPSTOP_POP.tokenIndex();\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Returns the dapp info\\r\\n     */\\r\\n    function getDappInfo(uint256 _dappId)\\r\\n        external\\r\\n        view\\r\\n        override\\r\\n        returns (DappInfo memory)\\r\\n    {\\r\\n        return dappInfo[_dappId];\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @dev Set the PoP address\\r\\n     */\\r\\n    function setPOP(DappStopPoP _DAPPSTOP_POP) external {\\r\\n        require(\\r\\n            address(DAPPSTOP_POP) == address(0),\\r\\n            \\"DappStopRegistry: DAPPSTOP_POP has already been set\\"\\r\\n        );\\r\\n        DAPPSTOP_POP = _DAPPSTOP_POP;\\r\\n    }\\r\\n}\\r\\n","keccak256":"0xdf83c4855c09ec101a45fda4ccd57a628e50fff38f99cf469d01df0848dcef1e","license":"MIT"},"contracts/interface/IDappStopPoP.sol":{"content":"// SPDX-License-Identifier: MIT\\r\\npragma solidity 0.8.17;\\r\\n\\r\\n/**--------------------------------------------------------------\\r\\n ______                    ______                   \\r\\n(______)                  / _____) _                 @d1onys1us\\r\\n _     _ _____ ____  ____( (____ _| |_ ___  ____     @2manslkh\\r\\n| |   | (____ |  _ \\\\|  _ \\\\\\\\____ (_   _/ _ \\\\|  _ \\\\    @MorikiKamio\\r\\n| |__/ // ___ | |_| | |_| _____) )| || |_| | |_| |   @yukiwaki\\r\\n|_____/ \\\\_____|  __/|  __(______/  \\\\__\\\\___/|  __/ \\r\\n              |_|   |_|                    |_|    ETHBOGOTA2022                             \\r\\n----------------------------------------------------------------*/\\r\\n\\r\\nimport \\"@openzeppelin/contracts/token/ERC1155/IERC1155.sol\\";\\r\\n\\r\\ninterface IDappStopPoP is IERC1155 {\\r\\n    function totalSupply(uint256 _id) external view returns (uint256);\\r\\n\\r\\n    function create(address creator, string memory uri)\\r\\n        external\\r\\n        returns (uint256);\\r\\n\\r\\n    function mint(\\r\\n        address _to,\\r\\n        uint256 _id,\\r\\n        bytes memory _data\\r\\n    ) external payable;\\r\\n}\\r\\n","keccak256":"0x41e24858ccfa64100ac4bf2346a4de61effb71f01578830d587a12a1aca2305d","license":"MIT"},"contracts/interface/IDappStopRegistry.sol":{"content":"// SPDX-License-Identifier: MIT\\r\\npragma solidity 0.8.17;\\r\\n\\r\\n/*--------------------------------------------------------------\\r\\n ______                    ______                   \\r\\n(______)                  / _____) _                 @d1onys1us\\r\\n _     _ _____ ____  ____( (____ _| |_ ___  ____     @2manslkh\\r\\n| |   | (____ |  _ \\\\|  _ \\\\\\\\____ (_   _/ _ \\\\|  _ \\\\    @MorikiKamio\\r\\n| |__/ // ___ | |_| | |_| _____) )| || |_| | |_| |   @yukiwaki\\r\\n|_____/ \\\\_____|  __/|  __(______/  \\\\__\\\\___/|  __/ \\r\\n              |_|   |_|                    |_|    ETHBOGOTA2022                             \\r\\n----------------------------------------------------------------*/\\r\\n\\r\\ninterface IDappStopRegistry {\\r\\n    struct DappInfo {\\r\\n        address creator;\\r\\n        string popURI;\\r\\n        string ceramicURI;\\r\\n        uint256 price;\\r\\n    }\\r\\n\\r\\n    /**\\r\\n     * @notice Register an app on DappStopRegistry.\\r\\n     */\\r\\n    function register(DappInfo memory dappInfo) external;\\r\\n\\r\\n    /**\\r\\n     * @notice Update an app on DappStopRegistry.\\r\\n     */\\r\\n    function update(uint256 _dappId, DappInfo memory dappInfo) external payable;\\r\\n\\r\\n    /**\\r\\n     * @notice Get total amount of Dapps Registered.\\r\\n     */\\r\\n    function getDappCount() external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @notice Get information of a Dapp based on the dappId.\\r\\n     */\\r\\n    function getDappInfo(uint256 _dappId)\\r\\n        external\\r\\n        view\\r\\n        returns (DappInfo memory);\\r\\n\\r\\n    /**\\r\\n     * @notice Get information of a Dapp based on the dappId.\\r\\n     */\\r\\n    function getCreator(uint256 _dappId) external view returns (address);\\r\\n\\r\\n    /**\\r\\n     * @notice Get information of a Dapp based on the dappId.\\r\\n     */\\r\\n    function getPrice(uint256 _dappId) external view returns (uint256);\\r\\n\\r\\n    /**\\r\\n     * @notice Get information of a Dapp based on the dappId. (Ceramic URI)\\r\\n     */\\r\\n    function getCeramicURI(uint256 _dappId)\\r\\n        external\\r\\n        view\\r\\n        returns (string memory);\\r\\n\\r\\n    /**\\r\\n     * @notice Get metadata for the PoP NFT based on the dappId. (IPFS URI)\\r\\n     */\\r\\n    function getPoPURI(uint256 _dappId) external view returns (string memory);\\r\\n\\r\\n    /**\\r\\n     * @notice Purchase a dapp based on the dappId.\\r\\n     */\\r\\n    function buy(uint256 _dappId) external payable;\\r\\n}\\r\\n","keccak256":"0xcf07db9df13d7aa3e9974e10e5b3b26f8481e9f5a014fa7abd19ba6558ae6b5b","license":"MIT"}},"version":1}',
  bytecode:
    "0x608060405234801561001057600080fd5b50611278806100206000396000f3fe6080604052600436106100a75760003560e01c8063c180402411610064578063c18040241461019c578063d48e638a146101bf578063d96a094a146101f5578063db9ce68114610208578063e19d69e614610238578063e75722301461025857600080fd5b806303b46dee146100ac5780630c76806c146100ce57806337c42b76146101045780633bd362101461011757806362c0153514610144578063901b82ad1461017c575b600080fd5b3480156100b857600080fd5b506100cc6100c7366004610e0f565b610288565b005b3480156100da57600080fd5b506100ee6100e9366004610e4c565b6104a6565b6040516100fb9190610eab565b60405180910390f35b6100cc610112366004610ec5565b61054b565b34801561012357600080fd5b50610137610132366004610e4c565b610749565b6040516100fb9190610f0c565b34801561015057600080fd5b50600054610164906001600160a01b031681565b6040516001600160a01b0390911681526020016100fb565b34801561018857600080fd5b506100cc610197366004610f6e565b6108dc565b3480156101a857600080fd5b506101b1610973565b6040519081526020016100fb565b3480156101cb57600080fd5b506101646101da366004610e4c565b6000908152600160205260409020546001600160a01b031690565b6100cc610203366004610e4c565b6109f0565b34801561021457600080fd5b50610228610223366004610e4c565b610b44565b6040516100fb9493929190610f8b565b34801561024457600080fd5b506100ee610253366004610e4c565b610c88565b34801561026457600080fd5b506101b1610273366004610e4c565b60009081526001602052604090206003015490565b60008060009054906101000a90046001600160a01b03166001600160a01b031663d55f92736040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103009190610fd3565b6000818152600160208181526040909220855181546001600160a01b0319166001600160a01b03909116178155918501519293508492908201906103449082611075565b50604082015160028201906103599082611075565b506060919091015160039091015581516001600160a01b03166103975760405162461bcd60e51b815260040161038e90611135565b60405180910390fd5b6000826020015151116103bc5760405162461bcd60e51b815260040161038e9061117f565b6000826040015151116103e15760405162461bcd60e51b815260040161038e906111c0565b6000548251602084015160405163a15ab08d60e01b81526001600160a01b039093169263a15ab08d92610418929091600401611205565b6020604051808303816000875af1158015610437573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045b9190610fd3565b508082600001516001600160a01b03167f0b7c9b5b2fa40353ec279d81cbdc3e6a7545e54bea6718d4aef883bba7565ac08460405161049a9190610f0c565b60405180910390a35050565b60008181526001602052604090206002018054606091906104c690610fec565b80601f01602080910402602001604051908101604052809291908181526020018280546104f290610fec565b801561053f5780601f106105145761010080835404028352916020019161053f565b820191906000526020600020905b81548152906001019060200180831161052257829003601f168201915b50505050509050919050565b6000828152600160205260409020546001600160a01b031633146105d05760405162461bcd60e51b815260206004820152603660248201527f4461707053746f7052656769737472793a20596f75206d7573742062652074686044820152750652063726561746f72206f66207468697320644170760541b606482015260840161038e565b80516001600160a01b03166105f75760405162461bcd60e51b815260040161038e90611135565b60008160200151511161061c5760405162461bcd60e51b815260040161038e9061117f565b6000816040015151116106415760405162461bcd60e51b815260040161038e906111c0565b6000828152600160208181526040909220835181546001600160a01b0319166001600160a01b03909116178155918301518392918201906106829082611075565b50604082015160028201906106979082611075565b506060919091015160039091015560005460208201516040516331d41c6960e01b81526001600160a01b03909216916331d41c69916106db91869190600401611229565b600060405180830381600087803b1580156106f557600080fd5b505af1158015610709573d6000803e3d6000fd5b50505050817ffea9b4df338b8695d3266fe9cf8a05180c69310a061af1f8f38ee9ead471d6108260405161073d9190610f0c565b60405180910390a25050565b61077d604051806080016040528060006001600160a01b031681526020016060815260200160608152602001600081525090565b60008281526001602081815260409283902083516080810190945280546001600160a01b031684529182018054918401916107b790610fec565b80601f01602080910402602001604051908101604052809291908181526020018280546107e390610fec565b80156108305780601f1061080557610100808354040283529160200191610830565b820191906000526020600020905b81548152906001019060200180831161081357829003601f168201915b5050505050815260200160028201805461084990610fec565b80601f016020809104026020016040519081016040528092919081815260200182805461087590610fec565b80156108c25780601f10610897576101008083540402835291602001916108c2565b820191906000526020600020905b8154815290600101906020018083116108a557829003601f168201915b505050505081526020016003820154815250509050919050565b6000546001600160a01b0316156109515760405162461bcd60e51b815260206004820152603360248201527f4461707053746f7052656769737472793a204441505053544f505f504f502068604482015272185cc8185b1c9958591e481899595b881cd95d606a1b606482015260840161038e565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60008060009054906101000a90046001600160a01b03166001600160a01b031663d55f92736040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109eb9190610fd3565b905090565b6000818152600160205260409020600301543414610a5c5760405162461bcd60e51b815260206004820152602360248201527f4461707053746f7052656769737472793a20496e73756666696369656e74204560448201526254482160e81b606482015260840161038e565b6000818152600160205260408082205490516001600160a01b03909116913480156108fc02929091818181858888f19350505050158015610aa1573d6000803e3d6000fd5b50600080546040516394d008ef60e01b8152336004820152602481018490526060604482015260648101929092526001600160a01b0316906394d008ef90608401600060405180830381600087803b158015610afc57600080fd5b505af1158015610b10573d6000803e3d6000fd5b50506040518392503391507fc55650ccda1011e1cdc769b1fbf546ebb8c97800b6072b49e06cd560305b1d6790600090a350565b6001602081905260009182526040909120805491810180546001600160a01b0390931692610b7190610fec565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9d90610fec565b8015610bea5780601f10610bbf57610100808354040283529160200191610bea565b820191906000526020600020905b815481529060010190602001808311610bcd57829003601f168201915b505050505090806002018054610bff90610fec565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2b90610fec565b8015610c785780601f10610c4d57610100808354040283529160200191610c78565b820191906000526020600020905b815481529060010190602001808311610c5b57829003601f168201915b5050505050908060030154905084565b60606001600083815260200190815260200160002060010180546104c690610fec565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610cd657600080fd5b50565b600082601f830112610cea57600080fd5b813567ffffffffffffffff80821115610d0557610d05610cab565b604051601f8301601f19908116603f01168101908282118183101715610d2d57610d2d610cab565b81604052838152866020858801011115610d4657600080fd5b836020870160208301376000602085830101528094505050505092915050565b600060808284031215610d7857600080fd5b6040516080810167ffffffffffffffff8282108183111715610d9c57610d9c610cab565b8160405282935084359150610db082610cc1565b90825260208401359080821115610dc657600080fd5b610dd286838701610cd9565b60208401526040850135915080821115610deb57600080fd5b50610df885828601610cd9565b604083015250606083013560608201525092915050565b600060208284031215610e2157600080fd5b813567ffffffffffffffff811115610e3857600080fd5b610e4484828501610d66565b949350505050565b600060208284031215610e5e57600080fd5b5035919050565b6000815180845260005b81811015610e8b57602081850181015186830182015201610e6f565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610ebe6020830184610e65565b9392505050565b60008060408385031215610ed857600080fd5b82359150602083013567ffffffffffffffff811115610ef657600080fd5b610f0285828601610d66565b9150509250929050565b602080825282516001600160a01b03168282015282015160806040830152600090610f3a60a0840182610e65565b90506040840151601f19848303016060850152610f578282610e65565b915050606084015160808401528091505092915050565b600060208284031215610f8057600080fd5b8135610ebe81610cc1565b6001600160a01b0385168152608060208201819052600090610faf90830186610e65565b8281036040840152610fc18186610e65565b91505082606083015295945050505050565b600060208284031215610fe557600080fd5b5051919050565b600181811c9082168061100057607f821691505b60208210810361102057634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561107057600081815260208120601f850160051c8101602086101561104d5750805b601f850160051c820191505b8181101561106c57828155600101611059565b5050505b505050565b815167ffffffffffffffff81111561108f5761108f610cab565b6110a38161109d8454610fec565b84611026565b602080601f8311600181146110d857600084156110c05750858301515b600019600386901b1c1916600185901b17855561106c565b600085815260208120601f198616915b82811015611107578886015182559484019460019091019084016110e8565b50858210156111255787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6020808252602a908201527f4461707053746f7052656769737472793a20496e76616c69642063726561746f6040820152697220616464726573732160b01b606082015260800190565b60208082526021908201527f4461707053746f7052656769737472793a20496e76616c696420706f705552496040820152602160f81b606082015260800190565b60208082526025908201527f4461707053746f7052656769737472793a20496e76616c696420636572616d69604082015264635552492160d81b606082015260800190565b6001600160a01b0383168152604060208201819052600090610e4490830184610e65565b828152604060208201526000610e446040830184610e6556fea26469706673582212200d8d74d976106179be52dbe00996b75b991b885933fdad2230076ed7bbf6968e64736f6c63430008110033",
  deployedBytecode:
    "0x6080604052600436106100a75760003560e01c8063c180402411610064578063c18040241461019c578063d48e638a146101bf578063d96a094a146101f5578063db9ce68114610208578063e19d69e614610238578063e75722301461025857600080fd5b806303b46dee146100ac5780630c76806c146100ce57806337c42b76146101045780633bd362101461011757806362c0153514610144578063901b82ad1461017c575b600080fd5b3480156100b857600080fd5b506100cc6100c7366004610e0f565b610288565b005b3480156100da57600080fd5b506100ee6100e9366004610e4c565b6104a6565b6040516100fb9190610eab565b60405180910390f35b6100cc610112366004610ec5565b61054b565b34801561012357600080fd5b50610137610132366004610e4c565b610749565b6040516100fb9190610f0c565b34801561015057600080fd5b50600054610164906001600160a01b031681565b6040516001600160a01b0390911681526020016100fb565b34801561018857600080fd5b506100cc610197366004610f6e565b6108dc565b3480156101a857600080fd5b506101b1610973565b6040519081526020016100fb565b3480156101cb57600080fd5b506101646101da366004610e4c565b6000908152600160205260409020546001600160a01b031690565b6100cc610203366004610e4c565b6109f0565b34801561021457600080fd5b50610228610223366004610e4c565b610b44565b6040516100fb9493929190610f8b565b34801561024457600080fd5b506100ee610253366004610e4c565b610c88565b34801561026457600080fd5b506101b1610273366004610e4c565b60009081526001602052604090206003015490565b60008060009054906101000a90046001600160a01b03166001600160a01b031663d55f92736040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103009190610fd3565b6000818152600160208181526040909220855181546001600160a01b0319166001600160a01b03909116178155918501519293508492908201906103449082611075565b50604082015160028201906103599082611075565b506060919091015160039091015581516001600160a01b03166103975760405162461bcd60e51b815260040161038e90611135565b60405180910390fd5b6000826020015151116103bc5760405162461bcd60e51b815260040161038e9061117f565b6000826040015151116103e15760405162461bcd60e51b815260040161038e906111c0565b6000548251602084015160405163a15ab08d60e01b81526001600160a01b039093169263a15ab08d92610418929091600401611205565b6020604051808303816000875af1158015610437573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045b9190610fd3565b508082600001516001600160a01b03167f0b7c9b5b2fa40353ec279d81cbdc3e6a7545e54bea6718d4aef883bba7565ac08460405161049a9190610f0c565b60405180910390a35050565b60008181526001602052604090206002018054606091906104c690610fec565b80601f01602080910402602001604051908101604052809291908181526020018280546104f290610fec565b801561053f5780601f106105145761010080835404028352916020019161053f565b820191906000526020600020905b81548152906001019060200180831161052257829003601f168201915b50505050509050919050565b6000828152600160205260409020546001600160a01b031633146105d05760405162461bcd60e51b815260206004820152603660248201527f4461707053746f7052656769737472793a20596f75206d7573742062652074686044820152750652063726561746f72206f66207468697320644170760541b606482015260840161038e565b80516001600160a01b03166105f75760405162461bcd60e51b815260040161038e90611135565b60008160200151511161061c5760405162461bcd60e51b815260040161038e9061117f565b6000816040015151116106415760405162461bcd60e51b815260040161038e906111c0565b6000828152600160208181526040909220835181546001600160a01b0319166001600160a01b03909116178155918301518392918201906106829082611075565b50604082015160028201906106979082611075565b506060919091015160039091015560005460208201516040516331d41c6960e01b81526001600160a01b03909216916331d41c69916106db91869190600401611229565b600060405180830381600087803b1580156106f557600080fd5b505af1158015610709573d6000803e3d6000fd5b50505050817ffea9b4df338b8695d3266fe9cf8a05180c69310a061af1f8f38ee9ead471d6108260405161073d9190610f0c565b60405180910390a25050565b61077d604051806080016040528060006001600160a01b031681526020016060815260200160608152602001600081525090565b60008281526001602081815260409283902083516080810190945280546001600160a01b031684529182018054918401916107b790610fec565b80601f01602080910402602001604051908101604052809291908181526020018280546107e390610fec565b80156108305780601f1061080557610100808354040283529160200191610830565b820191906000526020600020905b81548152906001019060200180831161081357829003601f168201915b5050505050815260200160028201805461084990610fec565b80601f016020809104026020016040519081016040528092919081815260200182805461087590610fec565b80156108c25780601f10610897576101008083540402835291602001916108c2565b820191906000526020600020905b8154815290600101906020018083116108a557829003601f168201915b505050505081526020016003820154815250509050919050565b6000546001600160a01b0316156109515760405162461bcd60e51b815260206004820152603360248201527f4461707053746f7052656769737472793a204441505053544f505f504f502068604482015272185cc8185b1c9958591e481899595b881cd95d606a1b606482015260840161038e565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60008060009054906101000a90046001600160a01b03166001600160a01b031663d55f92736040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109eb9190610fd3565b905090565b6000818152600160205260409020600301543414610a5c5760405162461bcd60e51b815260206004820152602360248201527f4461707053746f7052656769737472793a20496e73756666696369656e74204560448201526254482160e81b606482015260840161038e565b6000818152600160205260408082205490516001600160a01b03909116913480156108fc02929091818181858888f19350505050158015610aa1573d6000803e3d6000fd5b50600080546040516394d008ef60e01b8152336004820152602481018490526060604482015260648101929092526001600160a01b0316906394d008ef90608401600060405180830381600087803b158015610afc57600080fd5b505af1158015610b10573d6000803e3d6000fd5b50506040518392503391507fc55650ccda1011e1cdc769b1fbf546ebb8c97800b6072b49e06cd560305b1d6790600090a350565b6001602081905260009182526040909120805491810180546001600160a01b0390931692610b7190610fec565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9d90610fec565b8015610bea5780601f10610bbf57610100808354040283529160200191610bea565b820191906000526020600020905b815481529060010190602001808311610bcd57829003601f168201915b505050505090806002018054610bff90610fec565b80601f0160208091040260200160405190810160405280929190818152602001828054610c2b90610fec565b8015610c785780601f10610c4d57610100808354040283529160200191610c78565b820191906000526020600020905b815481529060010190602001808311610c5b57829003601f168201915b5050505050908060030154905084565b60606001600083815260200190815260200160002060010180546104c690610fec565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610cd657600080fd5b50565b600082601f830112610cea57600080fd5b813567ffffffffffffffff80821115610d0557610d05610cab565b604051601f8301601f19908116603f01168101908282118183101715610d2d57610d2d610cab565b81604052838152866020858801011115610d4657600080fd5b836020870160208301376000602085830101528094505050505092915050565b600060808284031215610d7857600080fd5b6040516080810167ffffffffffffffff8282108183111715610d9c57610d9c610cab565b8160405282935084359150610db082610cc1565b90825260208401359080821115610dc657600080fd5b610dd286838701610cd9565b60208401526040850135915080821115610deb57600080fd5b50610df885828601610cd9565b604083015250606083013560608201525092915050565b600060208284031215610e2157600080fd5b813567ffffffffffffffff811115610e3857600080fd5b610e4484828501610d66565b949350505050565b600060208284031215610e5e57600080fd5b5035919050565b6000815180845260005b81811015610e8b57602081850181015186830182015201610e6f565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610ebe6020830184610e65565b9392505050565b60008060408385031215610ed857600080fd5b82359150602083013567ffffffffffffffff811115610ef657600080fd5b610f0285828601610d66565b9150509250929050565b602080825282516001600160a01b03168282015282015160806040830152600090610f3a60a0840182610e65565b90506040840151601f19848303016060850152610f578282610e65565b915050606084015160808401528091505092915050565b600060208284031215610f8057600080fd5b8135610ebe81610cc1565b6001600160a01b0385168152608060208201819052600090610faf90830186610e65565b8281036040840152610fc18186610e65565b91505082606083015295945050505050565b600060208284031215610fe557600080fd5b5051919050565b600181811c9082168061100057607f821691505b60208210810361102057634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561107057600081815260208120601f850160051c8101602086101561104d5750805b601f850160051c820191505b8181101561106c57828155600101611059565b5050505b505050565b815167ffffffffffffffff81111561108f5761108f610cab565b6110a38161109d8454610fec565b84611026565b602080601f8311600181146110d857600084156110c05750858301515b600019600386901b1c1916600185901b17855561106c565b600085815260208120601f198616915b82811015611107578886015182559484019460019091019084016110e8565b50858210156111255787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6020808252602a908201527f4461707053746f7052656769737472793a20496e76616c69642063726561746f6040820152697220616464726573732160b01b606082015260800190565b60208082526021908201527f4461707053746f7052656769737472793a20496e76616c696420706f705552496040820152602160f81b606082015260800190565b60208082526025908201527f4461707053746f7052656769737472793a20496e76616c696420636572616d69604082015264635552492160d81b606082015260800190565b6001600160a01b0383168152604060208201819052600090610e4490830184610e65565b828152604060208201526000610e446040830184610e6556fea26469706673582212200d8d74d976106179be52dbe00996b75b991b885933fdad2230076ed7bbf6968e64736f6c63430008110033",
  devdoc: {
    kind: "dev",
    methods: {
      "getCreator(uint256)": {
        details: "Returns the creator of the dApp",
      },
      "getDappCount()": {
        details: "Returns the total number of Dapps Registered",
      },
      "getDappInfo(uint256)": {
        details: "Returns the dapp info",
      },
      "getPoPURI(uint256)": {
        details: "Returns the PoP URI of the dApp",
      },
      "getPrice(uint256)": {
        details: "Returns the price of the dApp",
      },
      "setPOP(address)": {
        details: "Set the PoP address",
      },
    },
    title: "DappStopRegistry",
    version: 1,
  },
  userdoc: {
    kind: "user",
    methods: {
      "buy(uint256)": {
        notice: "Purchase a dapp based on the dappId.",
      },
      "getCeramicURI(uint256)": {
        notice: "Get information of a Dapp based on the dappId. (Ceramic URI)",
      },
    },
    notice:
      "DappStopRegistry allows game developers to register their games on dAppStop.When a creator registers their game, a DappStopPop NFT collection is created for them.",
    version: 1,
  },
  storageLayout: {
    storage: [
      {
        astId: 2020,
        contract: "contracts/DappStopRegistry.sol:DappStopRegistry",
        label: "DAPPSTOP_POP",
        offset: 0,
        slot: "0",
        type: "t_contract(DappStopPoP)2010",
      },
      {
        astId: 2025,
        contract: "contracts/DappStopRegistry.sol:DappStopRegistry",
        label: "dappInfo",
        offset: 0,
        slot: "1",
        type: "t_mapping(t_uint256,t_struct(DappInfo)2393_storage)",
      },
    ],
    types: {
      t_address: {
        encoding: "inplace",
        label: "address",
        numberOfBytes: "20",
      },
      "t_contract(DappStopPoP)2010": {
        encoding: "inplace",
        label: "contract DappStopPoP",
        numberOfBytes: "20",
      },
      "t_mapping(t_uint256,t_struct(DappInfo)2393_storage)": {
        encoding: "mapping",
        key: "t_uint256",
        label: "mapping(uint256 => struct IDappStopRegistry.DappInfo)",
        numberOfBytes: "32",
        value: "t_struct(DappInfo)2393_storage",
      },
      t_string_storage: {
        encoding: "bytes",
        label: "string",
        numberOfBytes: "32",
      },
      "t_struct(DappInfo)2393_storage": {
        encoding: "inplace",
        label: "struct IDappStopRegistry.DappInfo",
        members: [
          {
            astId: 2386,
            contract: "contracts/DappStopRegistry.sol:DappStopRegistry",
            label: "creator",
            offset: 0,
            slot: "0",
            type: "t_address",
          },
          {
            astId: 2388,
            contract: "contracts/DappStopRegistry.sol:DappStopRegistry",
            label: "popURI",
            offset: 0,
            slot: "1",
            type: "t_string_storage",
          },
          {
            astId: 2390,
            contract: "contracts/DappStopRegistry.sol:DappStopRegistry",
            label: "ceramicURI",
            offset: 0,
            slot: "2",
            type: "t_string_storage",
          },
          {
            astId: 2392,
            contract: "contracts/DappStopRegistry.sol:DappStopRegistry",
            label: "price",
            offset: 0,
            slot: "3",
            type: "t_uint256",
          },
        ],
        numberOfBytes: "128",
      },
      t_uint256: {
        encoding: "inplace",
        label: "uint256",
        numberOfBytes: "32",
      },
    },
  },
};
