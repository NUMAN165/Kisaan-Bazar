# 🚜 Kisaan Bazar (Kisan Connect Marketplace)

**Kisaan Bazar** is a high-fidelity, full-stack, role-based platform built to empower the Indian agricultural ecosystem. By directly connecting rural farmers with wholesale and retail buyers, the platform cuts out middlemen, increases farm-gate realizations, and guarantees fresh, traceably-sourced produce for buyers at fair prices.

Designed for maximum inclusivity and high accessibility, the mobile application features regional language support, a premium "Digital Soil" design language optimized for outdoor visibility, and a highly responsive, intuitive UX.

---

## 🏗️ System Architecture & Full-Stack Overview

The Kisaan Bazar ecosystem consists of two core components working in unison:

### 1. The Mobile Client (`KisaanBazar/`)
A cross-platform app built using **React Native** and **TypeScript**, optimized for clean structure, role-based flows, and robust local caching.
- **Frontend Framework**: React Native (0.85.2) + React Navigation (v7)
- **Styling & Theme**: "Digital Soil" custom design system with support for custom typography, HSL-curated green & terracotta clay palettes, and tactile, high-contrast layouts.
- **Vector Icons**: Native bundling of `react-native-vector-icons` (MaterialCommunityIcons) configured via automated resource compiling.
- **State & Identity**: Custom context (`AuthContext`) handling session management, role routing, and role switching.
- **Localization**: Localized translation engine (`i18next`) supporting:
  - 🇬🇧 **English**
  - 🇮🇳 **Hindi (हिन्दी)**
  - 🇮🇳 **Marathi (मराठी)**

### 2. The Backend Server (`kisaanBazar-Backend/`)
A scalable **Node.js** API using the **Express** framework and **MongoDB** database, designed with clean architecture principles.
- **Engine**: Node.js & Express (v5)
- **Database**: MongoDB via Mongoose ODM
- **Security & Utilities**: CORS protection, environment segmentation, and modular routing infrastructure.

---

## ⚡ Implemented Features & Functionality

### 🔐 Unified Auth & Onboarding Flow
- **Robust Registration & Login**: High-quality inputs with validation, real-time error feedback, and integrated branding using the custom Kisaan Bazar visual identity.
- **Dynamic Role-Based Access Control (RBAC)**: Upon signing in, users select whether they are a **Farmer** or a **Buyer**. The app dynamically updates navigation routes, layouts, and permissions.
- **Language Switcher**: Instant localization switching in the profile settings, immediately updating all labels, instructions, and navigation tags across English, Hindi, and Marathi.

### 🚜 Farmer Experience
- **Dynamic Farmer Dashboard**: Personalized home screen showcasing real-time farm stats (Crops Listed, Active Orders, Revenue) and quick-action triggers.
- **My Crops Management**: A detailed inventory center with listing statuses ("Available", "Harvesting Soon", "Sold Out"), where farmers can manage crop listings and set prices.
- **Direct Messaging Portal**: A secure real-time messaging layout displaying incoming buyer inquiries, logistics updates, and unread counters.
- **Farmer Profile**: Personalized profile summary displaying active role status and single-tap secure logout.

### 🛍️ Buyer Experience
- **Interactive Marketplace Dashboard**: Designed for easy sourcing. Includes search bar, fast category shortcuts (Fruits, Vegetables, Grains), and rich product cards showing product name, farmer's name, rating, price per kg, and customized visual elements.
- **Order Tracking Hub**: A clean chronological order dashboard featuring color-coded delivery status badges ("Delivered", "In Transit", "Pending") and total order pricing.

---

## 📂 Project Directory Structure

```text
KisaanBazar/                      # Frontend Application
├── android/                      # Native Android project configuration
├── ios/                          # Native iOS project configuration
├── react-native.config.js        # Assets and fonts registration configuration
└── src/
    ├── assets/                   # Brand logos, localized graphics, and native fonts
    ├── core/                     # Application singletons & configurations
    │   ├── auth/                 # Session state context (AuthContext)
    │   ├── i18n/                 # Multi-language configuration & locale JSON files
    │   ├── navigation/           # Root Stack & Bottom Tab navigators
    │   └── theme.ts              # Theme constants & typography guidelines
    └── modules/                  # Modular, domain-isolated directories
        ├── auth/                 # Authentication, Login, Register, Role Selection
        ├── buyer/                # Marketplace listings, product cards, order views
        ├── chat/                 # Real-time chat & inbox modules
        ├── farmer/               # Farmer dashboards, inventory management
        └── profile/              # User settings, language selection, logout

kisaanBazar-Backend/              # Backend Server
├── config/                       # Core database and connection management
├── index.js                      # Application main entry point
└── package.json                  # Dependencies & script run commands
```

---

## 🔮 The Real-World Roadmap (What is Missing & Planned)
To transform Kisaan Bazar into a massive, production-grade application that solves the actual problems of **millions of Indian farmers**, the following state-of-the-art features are planned for our next phases:

### 1. mandis Integration (Agmarknet Prices API)
*   **Problem**: Middlemen cheat farmers by lying about current market prices.
*   **Solution**: Pull real-time market prices from the government's Agmarknet API. Show farmers the current highest, lowest, and average mandi rates for their crops in neighboring regions so they can set fair prices.

### 🎙️ 2. Voice-Based UI & Voice Search
*   **Problem**: Many older rural farmers are semi-literate and struggle to type out crop names.
*   **Solution**: Integrate Speech-to-Text APIs (e.g., Google Cloud Speech) supporting regional Indian accents to allow voice-activated crop listing and search in Hindi and Marathi.

### 🌿 3. AI Crop Disease Diagnosis
*   **Problem**: Farmers lose up to 37% of their yield to crop diseases that are diagnosed too late.
*   **Solution**: Integrate a camera-based AI module (TensorFlow Lite or on-device vision models). Farmers take a photo of a sick leaf, and the app instantly diagnoses the disease and suggests organic or pesticide-based treatments in their local language.

### 📦 4. Hyperlocal Smart Logistics & Co-loading
*   **Problem**: Individual farmers cannot afford to rent a whole truck to transport small batches of vegetables to the city.
*   **Solution**: Introduce a logistics co-loading aggregator. Group nearby farmers shipping to the same city to share a single truck, cutting logistics costs by up to 50%.

### 🔒 5. Direct Escrow Payments (Direct UPI to Farmer)
*   **Problem**: Buyers delay payments, forcing farmers into debt.
*   **Solution**: Integrate secure UPI and bank transfers via an Escrow system. When a buyer orders, the funds are held securely. The moment the buyer's logistics agent scans the crop at pickup, the funds are instantly released to the farmer's bank account.

### 📶 6. "Offline-First" Database & Sync
*   **Problem**: Rural farms have highly unstable 2G/3G internet connections.
*   **Solution**: Implement an offline-first storage engine (using Realm or SQLite). Farmers can list crops, check their orders, and draft messages completely offline. The app will automatically sync in the background the moment a stable network is detected.

---

## 🚀 Getting Started

### 📋 Prerequisites
- **Node.js**: (>= 22.11.0)
- **Java Development Kit**: JDK 17 (for Android compiles)
- **Xcode**: (Optional, for iOS)
- **MongoDB**: A running instance or MongoDB Atlas URI for backend connection.

### 📲 Setting up Frontend (`KisaanBazar/`)
1. Navigate to directory and install packages:
   ```bash
   cd KisaanBazar
   npm install
   ```
2. Link static resources and fonts:
   ```bash
   npx react-native-asset
   ```
3. Boot the application:
   - **Android**: `npm run android`
   - **iOS**: `npm run ios`

### 💻 Setting up Backend (`kisaanBazar-Backend/`)
1. Navigate to backend and install packages:
   ```bash
   cd kisaanBazar-Backend
   npm install
   ```
2. Create a `.env` file in `kisaanBazar-Backend/` and configure:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   NODE_ENV=development
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
