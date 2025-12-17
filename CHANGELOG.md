# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial open source release

### Changed

### Fixed

### Deprecated

### Removed

### Security

## [1.0.0] - 2024-12-17

### Added

- Initial public release of Vestitus
- Full e-commerce mobile app with iOS, Android, and Web support
- Cross-platform shopping experience with modern UI
- User authentication and account management
- Product catalog with search and filtering
- Shopping cart and checkout flow
- Order management and tracking
- User notifications
- Address management with map picker
- Product reviews and ratings
- Wishlist/Saved items functionality
- Speech-to-text search capability
- Responsive design with NativeWind styling
- TypeScript support for type safety
- Comprehensive test suite
- ESLint and code quality tools

### Technical Stack

- React Native with Expo
- TypeScript
- Zustand state management
- React Hook Form
- NativeWind/Tailwind CSS
- Jest for testing
- GitHub Actions for CI/CD

---

## Guidelines for Contributors

When adding changes, please:

1. **Added** for new features
2. **Changed** for changes in existing functionality
3. **Deprecated** for soon-to-be removed features
4. **Removed** for now removed features
5. **Fixed** for any bug fixes
6. **Security** for vulnerability fixes

When creating releases, follow [Semantic Versioning](https://semver.org/):

- **MAJOR** version for incompatible API changes
- **MINOR** version for backwards-compatible functionality additions
- **PATCH** version for backwards-compatible bug fixes

### Release Checklist

- [ ] Update version in `package.json`
- [ ] Update `CHANGELOG.md` with all changes
- [ ] Create git tag: `git tag v1.0.0`
- [ ] Push changes and tags: `git push && git push --tags`
- [ ] Create GitHub Release with changelog
- [ ] Build and upload artifacts if applicable
