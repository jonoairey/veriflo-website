#!/usr/bin/env python3
"""
Update all Veriflo pages with shared header and footer
"""

import os
import re

SITE_DIR = '/Users/jonoairey/veriflo/veriflo-website'

# Shared header HTML
HEADER_HTML = '''<nav class="fixed w-full nav-blur z-50 border-b border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <a href="index.html" class="flex items-center hover:opacity-80 transition">
                    <svg class="h-9" viewBox="0 0 260 70">
                        <defs>
                            <linearGradient id="headerCheckGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#3b82f6"/>
                                <stop offset="100%" style="stop-color:#1e40af"/>
                            </linearGradient>
                        </defs>
                        <path d="M4 34 L24 34 L38 54 L72 6 L92 6 L46 68 L4 34Z" fill="url(#headerCheckGrad)"/>
                        <text x="88" y="52" font-family="Space Grotesk, Inter, -apple-system, sans-serif" font-size="46" font-weight="700" fill="#ffffff" letter-spacing="-2">eriflo</text>
                    </svg>
                </a>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="index.html#features" class="text-gray-300 hover:text-white transition">Features</a>
                    <a href="index.html#how-it-works" class="text-gray-300 hover:text-white transition">How It Works</a>
                    <div class="dropdown">
                        <a href="index.html#use-cases" class="text-gray-300 hover:text-white transition cursor-pointer flex items-center gap-1">Use Cases <i class="fas fa-chevron-down text-xs"></i></a>
                        <div class="dropdown-content">
                            <a href="onlyfans-leak-protection.html"><i class="fas fa-heart mr-2 text-pink-400"></i>OnlyFans & Creators</a>
                            <a href="legal-document-protection.html"><i class="fas fa-balance-scale mr-2 text-blue-400"></i>Legal & Law Firms</a>
                            <a href="corporate-leak-prevention.html"><i class="fas fa-building mr-2 text-purple-400"></i>Enterprise</a>
                            <a href="healthcare-record-protection.html"><i class="fas fa-heartbeat mr-2 text-emerald-400"></i>Healthcare</a>
                            <a href="university-diploma-verification.html"><i class="fas fa-graduation-cap mr-2 text-yellow-400"></i>Universities</a>
                            <a href="financial-document-verification.html"><i class="fas fa-chart-line mr-2 text-cyan-400"></i>Financial Services</a>
                        </div>
                    </div>
                    <a href="index.html#pricing" class="text-gray-300 hover:text-white transition">Pricing</a>
                    <a href="https://app.useveriflo.com/login" class="text-gray-300 hover:text-white transition">Login</a>
                    <a href="https://app.useveriflo.com/signup" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl font-semibold hover:opacity-90 transition shadow-lg shadow-blue-500/30 btn-glow">Get Started</a>
                </div>
                <button class="md:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden pb-4">
                <a href="index.html#features" class="block py-2 text-gray-300">Features</a>
                <a href="index.html#how-it-works" class="block py-2 text-gray-300">How It Works</a>
                <a href="index.html#use-cases" class="block py-2 text-gray-300">Use Cases</a>
                <a href="index.html#pricing" class="block py-2 text-gray-300">Pricing</a>
                <a href="https://app.useveriflo.com/signup" class="block mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl font-semibold text-center">Get Started</a>
            </div>
        </div>
    </nav>'''

# Shared footer HTML
FOOTER_HTML = '''<footer class="py-16 border-t border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-5 gap-12 mb-12">
                <div class="md:col-span-2">
                    <a href="index.html" class="flex items-center mb-6 hover:opacity-80 transition">
                        <svg class="h-8" viewBox="0 0 260 70">
                            <defs>
                                <linearGradient id="footerCheckGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#3b82f6"/>
                                    <stop offset="100%" style="stop-color:#1e40af"/>
                                </linearGradient>
                            </defs>
                            <path d="M4 34 L24 34 L38 54 L72 6 L92 6 L46 68 L4 34Z" fill="url(#footerCheckGrad)"/>
                            <text x="88" y="52" font-family="Space Grotesk, Inter, -apple-system, sans-serif" font-size="46" font-weight="700" fill="#ffffff" letter-spacing="-2">eriflo</text>
                        </svg>
                    </a>
                    <p class="text-gray-500 font-dm mb-4">The truth layer for digital content. Blockchain verification and forensic fingerprinting in one platform.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-500 hover:text-white transition"><i class="fab fa-twitter text-xl"></i></a>
                        <a href="#" class="text-gray-500 hover:text-white transition"><i class="fab fa-linkedin text-xl"></i></a>
                        <a href="#" class="text-gray-500 hover:text-white transition"><i class="fab fa-github text-xl"></i></a>
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Product</h4>
                    <ul class="space-y-3">
                        <li><a href="index.html#features" class="text-gray-500 hover:text-white transition">Features</a></li>
                        <li><a href="index.html#pricing" class="text-gray-500 hover:text-white transition">Pricing</a></li>
                        <li><a href="#" class="text-gray-500 hover:text-white transition">API</a></li>
                        <li><a href="#" class="text-gray-500 hover:text-white transition">Integrations</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Use Cases</h4>
                    <ul class="space-y-3">
                        <li><a href="onlyfans-leak-protection.html" class="text-gray-500 hover:text-white transition">Content Creators</a></li>
                        <li><a href="legal-document-protection.html" class="text-gray-500 hover:text-white transition">Legal</a></li>
                        <li><a href="corporate-leak-prevention.html" class="text-gray-500 hover:text-white transition">Enterprise</a></li>
                        <li><a href="healthcare-record-protection.html" class="text-gray-500 hover:text-white transition">Healthcare</a></li>
                        <li><a href="university-diploma-verification.html" class="text-gray-500 hover:text-white transition">Universities</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Company</h4>
                    <ul class="space-y-3">
                        <li><a href="about.html" class="text-gray-500 hover:text-white transition">About</a></li>
                        <li><a href="blog.html" class="text-gray-500 hover:text-white transition">Blog</a></li>
                        <li><a href="faq.html" class="text-gray-500 hover:text-white transition">FAQ</a></li>
                        <li><a href="index.html#contact" class="text-gray-500 hover:text-white transition">Contact</a></li>
                        <li><a href="privacy-policy.html" class="text-gray-500 hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="terms-of-service.html" class="text-gray-500 hover:text-white transition">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div class="text-center text-gray-500 text-sm border-t border-white/5 pt-8">
                © 2025 Veriflo. All rights reserved.
            </div>
        </div>
    </footer>'''

# Dropdown CSS to add
DROPDOWN_CSS = '''.dropdown{position:relative}
        .dropdown-content{visibility:hidden;opacity:0;position:absolute;top:100%;left:50%;transform:translateX(-50%);background:rgba(15,23,42,0.95);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.1);min-width:280px;border-radius:16px;z-index:1000;padding-top:16px;padding-bottom:8px;transition:opacity 0.2s ease, visibility 0.2s ease}
        .dropdown-content::before{content:'';position:absolute;top:-16px;left:0;right:0;height:24px}
        .dropdown-content.show{visibility:visible;opacity:1}
        .dropdown-content a{color:rgba(255,255,255,0.7);padding:12px 20px;display:block;transition:all 0.2s}
        .dropdown-content a:hover{background:rgba(59,130,246,0.2);color:white}'''

# Dropdown JS to add
DROPDOWN_JS = '''// Dropdown navigation
        (function() {
            const dropdown = document.querySelector('.dropdown');
            const dropdownContent = document.querySelector('.dropdown-content');
            let timeoutId = null;

            if (dropdown && dropdownContent) {
                dropdown.addEventListener('mouseenter', function() {
                    clearTimeout(timeoutId);
                    dropdownContent.classList.add('show');
                });

                dropdown.addEventListener('mouseleave', function() {
                    timeoutId = setTimeout(function() {
                        dropdownContent.classList.remove('show');
                    }, 300);
                });

                dropdownContent.addEventListener('mouseenter', function() {
                    clearTimeout(timeoutId);
                });

                dropdownContent.addEventListener('mouseleave', function() {
                    timeoutId = setTimeout(function() {
                        dropdownContent.classList.remove('show');
                    }, 300);
                });
            }
        })();'''

# Pages to update (excluding index.html which has different structure)
PAGES = [
    'about.html',
    'blog.html',
    'faq.html',
    'privacy-policy.html',
    'terms-of-service.html',
    'corporate-leak-prevention.html',
    'legal-document-protection.html',
    'healthcare-record-protection.html',
    'university-diploma-verification.html',
    'financial-document-verification.html',
    'course-creator-protection.html',
    'music-leak-prevention.html',
    'photography-protection.html',
    'youtube-content-protection.html',
]

def update_page(filename):
    filepath = os.path.join(SITE_DIR, filename)
    
    if not os.path.exists(filepath):
        print(f"  ⚠️  Skipped (not found): {filename}")
        return False
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # 1. Replace header (match various nav patterns)
    # Pattern for old nav structure
    nav_pattern = r'<!-- Navigation -->\s*<nav class="fixed w-full nav-blur[^>]*>.*?</nav>'
    # Also match already wrapped headers
    nav_pattern2 = r'<!-- Navigation -->\s*<div id="site-header">.*?</div>\s*(?=\s*<!-- (?!Navigation))'
    
    header_replacement = f'''<!-- Navigation -->
    <div id="site-header">
    {HEADER_HTML}
    </div>'''
    
    if re.search(nav_pattern, content, re.DOTALL):
        content = re.sub(nav_pattern, header_replacement, content, flags=re.DOTALL)
    elif re.search(nav_pattern2, content, re.DOTALL):
        content = re.sub(nav_pattern2, header_replacement, content, flags=re.DOTALL)
    
    # 2. Replace footer
    # Pattern for old footer structure  
    footer_pattern = r'<!-- Footer -->\s*<footer class="py-16 border-t[^>]*>.*?</footer>'
    # Also match already wrapped footers
    footer_pattern2 = r'<!-- Footer -->\s*<div id="site-footer">.*?</div>\s*(?=\s*<script)'
    
    footer_replacement = f'''<!-- Footer -->
    <div id="site-footer">
    {FOOTER_HTML}
    </div>'''
    
    if re.search(footer_pattern, content, re.DOTALL):
        content = re.sub(footer_pattern, footer_replacement, content, flags=re.DOTALL)
    elif re.search(footer_pattern2, content, re.DOTALL):
        content = re.sub(footer_pattern2, footer_replacement, content, flags=re.DOTALL)
    
    # 3. Add dropdown CSS if not present
    if '.dropdown{' not in content and '.dropdown {' not in content:
        # Insert before </style>
        content = content.replace('</style>', f'{DROPDOWN_CSS}\n    </style>')
    
    # 4. Add dropdown JS if not present
    if "const dropdown = document.querySelector('.dropdown')" not in content:
        # Insert before </script> at end of body
        # Find the last </script> before </body>
        if '</script>\n</body>' in content:
            content = content.replace('</script>\n</body>', f'{DROPDOWN_JS}\n    </script>\n</body>')
        elif '</script>\r\n</body>' in content:
            content = content.replace('</script>\r\n</body>', f'{DROPDOWN_JS}\n    </script>\r\n</body>')
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✅ Updated: {filename}")
        return True
    else:
        print(f"  ⏭️  No changes: {filename}")
        return False

def main():
    print("\n🔧 Veriflo Header/Footer Update Script\n")
    
    updated = 0
    for page in PAGES:
        if update_page(page):
            updated += 1
    
    print(f"\n✨ Done! Updated {updated} files.\n")

if __name__ == '__main__':
    main()
