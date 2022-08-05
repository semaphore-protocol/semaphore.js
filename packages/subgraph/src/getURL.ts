import { Network } from "./types"

export default function getURL(network: Network): string {
    switch (network) {
        case "kovan":
        case "goerli":
        case "arbitrum":
            return `https://api.thegraph.com/subgraphs/name/semaphore-protocol/${network}`
        default:
            throw new TypeError(`Network '${network}' is not supported`)
    }
}
