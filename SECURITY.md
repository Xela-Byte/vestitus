# Security Policy

## Reporting a Vulnerability

We take security vulnerabilities seriously and appreciate your help in responsibly disclosing them. If you discover a security issue, please follow these steps:

### Do Not

- ❌ Open a public GitHub issue for security vulnerabilities
- ❌ Post security issues in discussion forums or social media
- ❌ Create a public pull request with a security fix

### Do

1. **Email us directly** at [xelaoladipupo@gmail.com](mailto:xelaoladipupo@gmail.com) (or the project maintainer's email)
2. **Include details** about the vulnerability:
   - Type of vulnerability
   - Affected versions
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if you have one)

3. **Give us time** to respond and patch the issue before public disclosure
4. **Follow responsible disclosure** by allowing us 90 days to address the issue before public announcement

### Response Timeline

- **Acknowledgment**: Within 24-48 hours
- **Assessment**: Within 1 week
- **Fix & Release**: We'll prioritize critical vulnerabilities
- **Public Disclosure**: We'll coordinate timing with you

## Supported Versions

- **Current**: Latest version receives security updates
- **Previous**: Last 2 minor versions may receive critical security patches
- **Older versions**: No longer receiving updates; please upgrade

## Security Best Practices

When using Vestitus, please follow these best practices:

1. **Keep dependencies updated**: Run `npm update` regularly
2. **Use environment variables**: Never hardcode sensitive data
3. **Validate user input**: Always sanitize and validate input data
4. **Use HTTPS**: Always use HTTPS in production
5. **Secure AsyncStorage**: Be aware that AsyncStorage is not encrypted
6. **Review dependencies**: Check for known vulnerabilities with `npm audit`

## Dependencies Security

We regularly audit dependencies using:

- `npm audit`
- Dependabot
- Snyk

## Contact

For security inquiries, contact the maintainers privately before public disclosure.

Thank you for helping keep Vestitus secure! 🔒
