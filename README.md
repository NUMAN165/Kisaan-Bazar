# 🚜 Kisaan Bazar (Kisan Connect Marketplace)

Kisaan Bazar is a professional, role-based mobile application designed to empower the Indian agricultural community. It directly connects farmers with buyers, cutting out middlemen and ensuring fair pricing and transparency.

Built with a focus on accessibility, the app supports multiple Indian languages and features a modern, tactile "Digital Soil" design system.

---

## ✨ Key Features

- **🌍 Multi-Language Support**: Fully localized in **English**, **Hindi (हिन्दी)**, and **Marathi (मराठी)**.
- **🔐 Role-Based Access Control (RBAC)**: Distinct experiences and dashboards for **Farmers** and **Buyers**.
- **📊 Farmer Dashboard**: Personalized greetings, farm status alerts, and real-time market price updates.
- **🛍️ Buyer Marketplace**: (In Progress) A streamlined interface for browsing and purchasing fresh produce directly from the source.
- **🎨 Premium UI/UX**: Designed using the "Digital Soil" system—earthy tones, high contrast for outdoor readability, and smooth micro-animations.

---

## 🛠️ Technology Stack

- **Framework**: [React Native](https://reactnative.dev/) (0.85.2)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Navigation**: [React Navigation v7](https://reactnavigation.org/)
- **Localization**: [i18next](https://www.i18next.com/) & `react-i18next`
- **Storage**: [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) (for language and session persistence)
- **Theme**: Custom Design System with support for modern tokens (Material-inspired).

---

## 📂 Project Structure

The project follows a **modular, feature-based architecture** for maximum scalability and maintainability:

```text
src/
├── core/               # Global configuration & singleton services
│   ├── auth/           # AuthContext & Session management
│   ├── navigation/     # Root & Tab navigators
│   ├── i18n/           # Localization setup & locale files
│   └── theme/          # Design tokens & global styles
├── shared/             # Reusable UI components & hooks
└── modules/            # Feature-specific modules
    ├── auth/           # Login, Register, Role Selection
    ├── farmer/         # Farmer-specific screens & logic
    └── buyer/          # Buyer-specific screens & logic
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 22.11.0)
- [Android Studio](https://developer.android.com/studio) (for Android Emulator)
- [CocoaPods](https://cocoapods.org/) (for iOS development on macOS)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/NUMAN165/Kisaan-Bazar.git
   cd Kisaan-Bazar
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   - **Android**:
     ```bash
     npm run android
     ```
   - **iOS**:
     ```bash
     npm run ios
     ```

---

## 🤝 Contribution

This project is currently in active development. Feel free to open issues or submit pull requests to improve the marketplace experience for our farmers!

---

## 📄 License

This project is private and for internal use.
