#!/usr/bin/env python3
"""
Batch update script to add Document Issuers to all Veriflo website pages.
Updates navigation dropdown and footer Use Cases section.
"""

import os
import re

# Directory containing the website files
WEBSITE_DIR = "/Users/jonoairey/VERIFLO/Veriflo-Website"

# Files to update (excluding index.html which is already updated, and document-issuers.html and university-diploma-verification.html which have correct nav)
FILES_TO_UPDATE = [
    "onlyfans-leak-protection.html",
    "legal-document-protection.html",
    "corporate-leak-prevention.html",
    "healthcare-record-protection.html",
    "financial-document-verification.html",
    "course-creator-protection.html",
    "photography-protection.html",
    "music-leak-prevention.html",
    "youtube-content-protection.html",
    "about.html",
    "blog.html",
    "faq.html",
    "privacy-policy.html",
    "terms-of-service.html",
]

# Old dropdown content pattern (without Document Issuers)
OLD_DROPDOWN = '''<div class="dropdown-content">
                            <a href="onlyfans-leak-protection.html"><i class="fas fa-heart mr-2 text-pink-400"></i>OnlyFans & Creators</a>
                            <a href="legal-document-protection.html"><i class="fas fa-balance-scale mr-2 text-blue-400"></i>Legal & Law Firms</a>
                            <a href="corporate-leak-prevention.html"><i class="fas fa-building mr-2 text-purple-400"></i>Enterprise</a>
                            <a href="healthcare-record-protection.html"><i class="fas fa-heartbeat mr-2 text-emerald-400"></i>Healthcare</a>
                            <a href="university-diploma-verification.html"><i class="fas fa-graduation-cap mr-2 text-yellow-400"></i>Universities</a>
                            <a href="financial-document-verification.html"><i class="fas fa-chart-line mr-2 text-cyan-400"></i>Financial Services</a>
                        </div>'''

# New dropdown content (with Document Issuers first)
NEW_DROPDOWN = '''<div class="dropdown-content">
                            <a href="document-issuers.html"><i class="fas fa-file-certificate mr-2 text-blue-400"></i>Document Issuers</a>
                            <a href="onlyfans-leak-protection.html"><i class="fas fa-heart mr-2 text-pink-400"></i>OnlyFans & Creators</a>
                            <a href="legal-document-protection.html"><i class="fas fa-balance-scale mr-2 text-blue-400"></i>Legal & Law Firms</a>
                            <a href="corporate-leak-prevention.html"><i class="fas fa-building mr-2 text-purple-400"></i>Enterprise</a>
                            <a href="healthcare-record-protection.html"><i class="fas fa-heartbeat mr-2 text-emerald-400"></i>Healthcare</a>
                            <a href="university-diploma-verification.html"><i class="fas fa-graduation-cap mr-2 text-yellow-400"></i>Universities</a>
                            <a href="financial-document-verification.html"><i class="fas fa-chart-line mr-2 text-cyan-400"></i>Financial Services</a>
                        </div>'''

# Old footer Use Cases pattern
OLD_FOOTER = '''<h4 class="font-semibold mb-4">Use Cases</h4>
                    <ul class="space-y-3">
                        <li><a href="onlyfans-leak-protection.html" class="text-gray-500 hover:text-white transition">Content Creators</a></li>
                        <li><a href="legal-document-protection.html" class="text-gray-500 hover:text-white transition">Legal</a></li>
                        <li><a href="corporate-leak-prevention.html" class="text-gray-500 hover:text-white transition">Enterprise</a></li>
                        <li><a href="healthcare-record-protection.html" class="text-gray-500 hover:text-white transition">Healthcare</a></li>
                        <li><a href="university-diploma-verification.html" class="text-gray-500 hover:text-white transition">Universities</a></li>
                    </ul>'''

# New footer Use Cases (with Document Issuers)
NEW_FOOTER = '''<h4 class="font-semibold mb-4">Use Cases</h4>
                    <ul class="space-y-3">
                        <li><a href="document-issuers.html" class="text-gray-500 hover:text-white transition">Document Issuers</a></li>
                        <li><a href="onlyfans-leak-protection.html" class="text-gray-500 hover:text-white transition">Content Creators</a></li>
                        <li><a href="legal-document-protection.html" class="text-gray-500 hover:text-white transition">Legal</a></li>
                        <li><a href="corporate-leak-prevention.html" class="text-gray-500 hover:text-white transition">Enterprise</a></li>
                        <li><a href="university-diploma-verification.html" class="text-gray-500 hover:text-white transition">Universities</a></li>
                    </ul>'''

def update_file(filepath):
    """Update a single file with new nav and footer."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        changes_made = []
        
        # Update dropdown
        if OLD_DROPDOWN in content:
            content = content.replace(OLD_DROPDOWN, NEW_DROPDOWN)
            changes_made.append("dropdown")
        
        # Update footer
        if OLD_FOOTER in content:
            content = content.replace(OLD_FOOTER, NEW_FOOTER)
            changes_made.append("footer")
        
        # Only write if changes were made
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return changes_made
        else:
            return []
    except Exception as e:
        return f"ERROR: {e}"

def main():
    print("=" * 60)
    print("Veriflo Website Batch Update")
    print("Adding Document Issuers to navigation and footer")
    print("=" * 60)
    print()
    
    results = {}
    
    for filename in FILES_TO_UPDATE:
        filepath = os.path.join(WEBSITE_DIR, filename)
        if os.path.exists(filepath):
            result = update_file(filepath)
            results[filename] = result
            if isinstance(result, list) and result:
                print(f"✅ {filename}: Updated {', '.join(result)}")
            elif isinstance(result, list) and not result:
                print(f"⚠️  {filename}: No changes needed (already updated or different format)")
            else:
                print(f"❌ {filename}: {result}")
        else:
            print(f"❌ {filename}: File not found")
            results[filename] = "NOT FOUND"
    
    print()
    print("=" * 60)
    print("Summary")
    print("=" * 60)
    
    updated = sum(1 for r in results.values() if isinstance(r, list) and r)
    skipped = sum(1 for r in results.values() if isinstance(r, list) and not r)
    errors = sum(1 for r in results.values() if not isinstance(r, list))
    
    print(f"Updated: {updated}")
    print(f"Skipped: {skipped}")
    print(f"Errors:  {errors}")

if __name__ == "__main__":
    main()
