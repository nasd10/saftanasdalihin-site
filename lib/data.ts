// lib/data.ts
import { DetailedProject } from "./types";
export type { DetailedProject } from "./types";

// Detailed project data
export const PROJECTS_DATA: DetailedProject[] = [
  {
  slug: 'class-fund-smart-contract',
  title: 'Class Fund / Group Treasury Smart Contract',
  shortDescription: 'A simplified, on-chain treasury and group fund management system for collecting recurring contributions and secure withdrawals by a designated treasurer.',
  thumbnail: '/images/projects/classfund.png',
  tags: ['Blockchain', 'Smart Contract', 'Solidity', 'Fund Management', 'EVM'],
  liveUrl: 'https://sepolia.etherscan.io/address/0x43c9c8ced4655a2b7ee26d680935cb0d82bdf071#code',
  githubUrl: 'https://github.com/nasd10/class-fund',
  fullDescription: 'This project implements a basic treasury model using Solidity. It allows designated members to contribute funds periodically (pay function), tracks contributions per period, and enables a single treasurer to manage and securely withdraw the total balance. It provides a transparent, immutable ledger for group finances.',
  role: 'Smart Contract Developer: Responsible for the full development lifecycle, including contract design, implementation of contribution and withdrawal logic, and event logging for transparency.',
  challenge: 'Designing a simple, gas-efficient structure to track contributions against specific "periods" and ensuring that the withdrawal mechanism was restricted only to the authorized treasurer (single-point of control).',
  solution: 'Utilized `mapping` for period-based contribution tracking and implemented an `onlyTreasurer` modifier to secure critical functions like `withdraw` and `nextPeriod`, enhancing the contract’s integrity and security.',
  keyFeatures: ['Period-Based Contribution Tracking', 'Designated Treasurer/Single-Sig Authority', 'Secure Withdrawal Mechanism', 'Transparent On-Chain Events'],
  galleryImages: ['/images/projects/classfund.png'],
  },
  
  {
    slug: 'basic-onchain-voting-system',
    title: 'Basic On-Chain Voting System',
    shortDescription: 'A simplified, secure smart contract for decentralized voting, preventing users from voting multiple times and tracking results transparently.',
    thumbnail: '/images/projects/voting.png',
    tags: ['Solidity', 'Smart Contract', 'Governance', 'DApp'],
    liveUrl: 'https://sepolia.etherscan.io/address/0x0219d0B5352fC9776D88F62Ef0bB95BF12d95F7D#code',
    githubUrl: 'https://github.com/nasd10/voting-smart-contract',
    fullDescription: 'This project implements a foundational voting mechanism using Solidity. It ensures that each unique address can cast only one vote, preventing manipulation. The contract registers two candidates upon deployment and securely increments the vote count, providing immediate and auditable results.',
    role: 'Smart Contract Developer: Responsible for designing the core voting logic, including the single-vote restriction and candidate initialization.',
    challenge: 'The primary challenge was implementing a secure method to restrict voting to a single instance per user (address) while maintaining simplicity and gas efficiency.',
    solution: 'Implemented a boolean `mapping(address => bool) public hasVoted` which is checked using `require(!hasVoted[msg.sender], ...)` at the start of the `vote()` function, guaranteeing one-time participation.',
    keyFeatures: ['Single-Vote Restriction (One Address, One Vote)', 'On-Chain Vote Tallying', 'Transparent Results (View Functions)', 'Basic Candidate Registration'],
    galleryImages: ['/images/projects/voting.png'],
  },
  {
    slug: 'simple-owner-restricted-storage',
    title: 'Simple Smart Contract with Owner Restriction',
    shortDescription: 'A foundational Solidity contract demonstrating access control via the `onlyOwner` modifier, allowing only the deployer to modify a stored variable.',
    thumbnail: '/images/projects/simple-smart-contract.png',
    tags: ['Solidity', 'Smart Contract', 'Access Control', 'EVM', 'Remix'],
    liveUrl: 'https://sepolia.etherscan.io/address/0x0A5A5ecEECC9E5edD56E91675847d871F4BA2ec5#code',
    githubUrl: 'https://github.com/nasd10/simple-smart-contract',
    fullDescription: 'This project serves as an essential exercise in Solidity, focusing on core concepts. It initializes a contract owner upon deployment and uses a custom `onlyOwner` modifier to secure the `setAngka` function, ensuring that sensitive state modifications are restricted. It also includes a basic `pure` function (`addNum`) for calculation practice.',
    role: 'Solidity Learner & Implementer: Focused on writing clean, secure code demonstrating mastery of modifiers and basic state management in Solidity.',
    challenge: 'The core challenge was securely implementing the access restriction logic to protect the `angka` state variable, ensuring only the original deployer could execute the critical `setAngka` function.',
    solution: 'Implemented the `onlyOwner` modifier which utilizes `require(msg.sender == owner, ...)` to revert transactions from unauthorized addresses, standardizing access control, and improving code readability.',
    keyFeatures: ['Owner-Controlled State Variable', 'Custom `onlyOwner` Modifier', 'Basic Pure Function (`addNum`)', 'Secure Access Restriction'],
    galleryImages: ['/images/projects/simple-smart-contract.png'],
  }
];

// Helper function to fetch data by slug
export function getProjectBySlug(slug: string): DetailedProject | undefined {
  return PROJECTS_DATA.find(p => p.slug === slug);
}

// Helper function to fetch all slugs (for Static Generation)
export function getAllProjectSlugs() {
    return PROJECTS_DATA.map(p => ({ slug: p.slug }));
}