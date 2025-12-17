# Release v1.0.0

**Release Date**: December 17, 2025

## Overview

**Vestitus** v1.0.0 - A modern e-commerce mobile application for iOS, Android, and Web platforms. This release includes the complete Android APK build optimized for production deployment.

## What's New

### ✨ Core Features

- **Authentication System** - Secure login, registration, and password reset workflows
- **Product Discovery** - Browse, search, and filter products with advanced filtering options
- **Shopping Cart** - Intuitive cart management with checkout flow
- **Order Management** - Real-time order tracking and complete order history
- **User Profiles** - Personalized accounts with saved preferences
- **Address Management** - Multiple delivery address support with integrated map picker
- **Notifications** - Push notifications for orders and promotional updates
- **Product Reviews** - Community ratings and detailed review system
- **Voice Search** - Speech-to-text search capability for accessibility
- **Wishlist** - Save favorite products for later purchase

## Downloads

- **Android APK**: [app-release.apk](https://github.com/xelabyte/vestitus/releases/download/v1.0.0/app-release.apk) (93 MB)

## Installation

### Android

Download the APK file and install it on your Android device (API 24+):

```bash
adb install app-release.apk
```

Or simply download the APK and open it on your Android device to install.

## Technical Details

### Build Information

- **Package Name**: `com.xelabyte.vestitus`
- **Version Code**: 2
- **Version Name**: 1.0.0
- **Build Type**: Release (Signed)
- **Build Time**: ~7.5 minutes

### System Requirements

- **Minimum Android SDK**: 24 (Android 7.0)
- **Target Android SDK**: 36 (Android 15)
- **Recommended**: Android 10+ for optimal performance

### Technology Stack

- **Framework**: React Native 0.81.5 with Expo 54.0.27
- **Language**: TypeScript
- **Styling**: NativeWind + Tailwind CSS v3.4.18
- **State Management**: Zustand v5.0.9
- **Navigation**: Expo Router v6.0.17
- **Forms**: React Hook Form v7.68.0
- **Maps**: React Native Maps 1.20.1
- **Build System**: Gradle 8.14.3
- **NDK**: Version 27.1.12297006

### Key Dependencies

| Package                 | Version | Purpose                   |
| ----------------------- | ------- | ------------------------- |
| react-native            | 0.81.5  | Core framework            |
| expo                    | 54.0.27 | Managed service framework |
| react-navigation        | 7.x     | Navigation                |
| nativewind              | 4.2.1   | Styling                   |
| zustand                 | 5.0.9   | State management          |
| react-hook-form         | 7.68.0  | Form handling             |
| expo-router             | 6.0.17  | File-based routing        |
| react-native-maps       | 1.20.1  | Map integration           |
| expo-speech-recognition | 3.0.1   | Voice search              |

## File Information

```
File: app-release.apk
Size: 93 MB
SHA-256: [Generate and add when published]
Signature: Android Keystore (com.xelabyte.vestitus)
```

## Known Issues & Limitations

- None reported in this release

## Breaking Changes

None - This is the initial v1.0.0 release.

## Future Roadmap

- [ ] iOS App Store release
- [ ] Web platform optimization
- [ ] Additional payment gateway integrations
- [ ] Enhanced analytics
- [ ] Offline mode support
- [ ] Performance optimizations

## Support

For issues, feature requests, or questions:

- [Open an Issue](https://github.com/xelabyte/vestitus/issues)
- [Email Support](mailto:support@xelabyte.com)

## Credits

Built with ❤️ by the Vestitus team using modern React Native technologies.

---

**Release Channel**: Stable  
**License**: [Your License Here]  
**Repository**: [xelabyte/vestitus](https://github.com/xelabyte/vestitus)
