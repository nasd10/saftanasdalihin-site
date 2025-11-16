// lib/data.ts
import { DetailedProject } from "./types";
export type { DetailedProject } from "./types";

// Detailed project data
export const PROJECTS_DATA: DetailedProject[] = [
  {
    slug: 'dao-governance-suite',
    title: 'Decentralized Governance System (DAO)',
    shortDescription: 'A custom on-chain governance suite featuring proposal submission, secure voting, and treasury management implemented via Solidity contracts.',
    thumbnail: '/images/projects/dao-thumb.jpg',
    tags: ['Solidity', 'Hardhat', 'Ethers.js', 'DAO', 'TypeScript'],
    liveUrl: 'https://demo-dao-portal.com',
    githubUrl: 'https://github.com/yourname/dao-governance-suite',
    fullDescription: 'This project demonstrates advanced smart contract architecture, focusing on security and upgradeability for decentralized decision-making. The system utilizes time-lock mechanisms and token-weighted voting.',
    role: 'Lead Smart Contract Architect: Responsible for writing and auditing all governance logic, including time-lock mechanisms and tokenomics integration.',
    challenge: 'Ensuring the contract logic was fully resistant to common re-entrancy attacks and establishing a secure, upgradeable proxy pattern for future updates.',
    solution: 'Implemented OpenZeppelin standards for upgradeability and utilized comprehensive unit tests using Hardhat and Waffle for near-100% code coverage.',
    keyFeatures: ['Token-Based Voting', 'Secure Proxy Pattern', 'Time-Locked Execution', 'Transparent Proposal Management'],
    galleryImages: ['/images/projects/dao-1.jpg', '/images/projects/dao-2.jpg'],
  },
  {
    slug: 'nft-minting-contract',
    title: 'Generative NFT Collection & Minting Contract',
    shortDescription: 'A fully secure and gas-optimized ERC-721 collection contract with custom royalty standards and a decentralized minting frontend.',
    thumbnail: '/images/projects/nft-thumb.jpg',
    tags: ['Solidity', 'Foundry', 'Next.js', 'Viem', 'ERC-721'],
    liveUrl: 'https://demo-nft-mint.com',
    githubUrl: 'https://github.com/yourname/nft-minting-contract',
    fullDescription: 'Focusing on gas efficiency and industry-standard security, this project includes the entire minting lifecycle, from Merkle-proof whitelisting to metadata storage on IPFS.',
    role: 'Solo Developer: Designed and deployed the NFT contract and built the interactive frontend using Viem for reliable wallet interaction.',
    challenge: 'Optimizing gas costs to keep transaction fees low during the mint process while implementing a fair Merkle-proof whitelisting mechanism.',
    solution: 'Used Foundry for extensive gas optimization testing and implemented the Merkle proof verification directly within the smart contract for efficiency and security.',
    keyFeatures: ['Gas-Optimized Mint', 'Merkle-Proof Whitelisting', 'IPFS Metadata Storage', 'Custom Royalty Logic'],
    galleryImages: ['/images/projects/nft-1.jpg'],
  },
];

// Helper function to fetch data by slug
export function getProjectBySlug(slug: string): DetailedProject | undefined {
  return PROJECTS_DATA.find(p => p.slug === slug);
}

// Helper function to fetch all slugs (for Static Generation)
export function getAllProjectSlugs() {
    return PROJECTS_DATA.map(p => ({ slug: p.slug }));
}