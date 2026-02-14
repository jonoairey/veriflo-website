import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Code, Key, Zap, AlertTriangle, Copy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'API Documentation - Veriflo | Developer API Reference',
  description: 'Complete API documentation for Veriflo verification, PII detection, and redaction endpoints. REST API with Bearer token authentication.',
};

export default function ApiDocsPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 text-emerald-500">
              <Code className="w-5 h-5" />
              <span className="text-sm font-semibold">DEVELOPER DOCS</span>
            </div>
            <h1 className="text-5xl font-bold">API Documentation</h1>
            <p className="text-xl text-slate-400">
              Integrate Veriflo's verification, PII detection, and redaction capabilities into your application with our REST API. Simple authentication, powerful endpoints, and comprehensive response data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                <Link href="https://app.useveriflo.com/settings/api-keys">Get API Key</Link>
              </Button>
              <Button asChild variant="ghost" className="border-slate-700 hover:bg-slate-900">
                <Link href="#endpoints">View Endpoints</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
              <p className="text-slate-400 text-lg">Get up and running with the Veriflo API in three simple steps.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-black font-bold flex items-center justify-center">1</div>
                      <h3 className="text-lg font-semibold">Get Your API Key</h3>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Navigate to your dashboard settings to generate or copy your API key. Keep it secure and never share it publicly.
                    </p>
                    <Button asChild variant="ghost" size="sm" className="border-slate-700 hover:bg-slate-800 text-emerald-500 hover:text-emerald-400 w-full">
                      <Link href="https://app.useveriflo.com/settings/api-keys">Go to API Keys</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-black font-bold flex items-center justify-center">2</div>
                      <h3 className="text-lg font-semibold">Make a Request</h3>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Send a POST request to any endpoint with your API key in the Authorization header.
                    </p>
                    <pre className="bg-slate-800 border border-slate-700 rounded-lg p-3 overflow-x-auto text-xs text-gray-300 font-mono">
                      <code>{`curl -X POST \\
  https://app.useveriflo.com/api/v1/verify \\
  -H "Authorization: Bearer vf_..." \\
  -F "file=@document.pdf"`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-black font-bold flex items-center justify-center">3</div>
                      <h3 className="text-lg font-semibold">Get Results</h3>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Receive a JSON response with verification results, PII data, or redacted file URLs.
                    </p>
                    <pre className="bg-slate-800 border border-slate-700 rounded-lg p-3 overflow-x-auto text-xs text-gray-300 font-mono">
                      <code>{`{
  "status": "success",
  "data": {
    "integrity_score": 85,
    ...
  }
}`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Key className="w-8 h-8 text-emerald-500" />
                Authentication
              </h2>
              <p className="text-slate-400 text-lg">
                All API requests require Bearer token authentication using your API key.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Bearer Token Format</h3>
                    <p className="text-slate-400 text-sm">
                      Include your API key in the Authorization header with every request:
                    </p>
                    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                      <p className="text-gray-300 font-mono text-sm">
                        Authorization: Bearer vf_xxxxx...
                      </p>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Replace <span className="font-mono bg-slate-800 px-2 py-1 rounded">vf_xxxxx...</span> with your actual API key.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">API Key Management</h3>
                    <p className="text-slate-400 text-sm">
                      API keys are tied to your Veriflo account and can be rotated at any time from your account settings.
                    </p>
                    <ul className="text-slate-400 text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>Each key is unique to your account</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>Never expose keys in client-side code</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>Rotate regularly for security</span>
                      </li>
                    </ul>
                    <Button asChild variant="ghost" size="sm" className="border-slate-700 hover:bg-slate-800 text-emerald-500 hover:text-emerald-400 w-full">
                      <Link href="https://app.useveriflo.com/settings/api-keys">Manage Keys</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints Section */}
      <section className="border-b border-slate-800" id="endpoints">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-8 h-8 text-emerald-500" />
                API Endpoints
              </h2>
              <p className="text-slate-400 text-lg">
                Three powerful endpoints for document verification, PII detection, and secure redaction.
              </p>
            </div>

            {/* POST /api/v1/verify */}
            <Card className="bg-slate-900 border-slate-800 overflow-hidden">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-baseline gap-3 pb-4 border-b border-slate-800">
                    <span className="px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded">POST</span>
                    <span className="font-mono text-lg text-emerald-400">/api/v1/verify</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Document Integrity Verification</h3>
                      <p className="text-slate-400">
                        Verify the integrity of PDF or image documents, detect AI-generated content, identify template matches, and analyze document metadata.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-emerald-400 mb-2">Request</h4>
                        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 space-y-3">
                          <p className="text-slate-300 text-sm">
                            <span className="font-semibold">Multipart Form Data:</span>
                          </p>
                          <ul className="text-slate-400 text-sm space-y-1 ml-4">
                            <li className="font-mono">file: File (PDF or image)</li>
                          </ul>
                          <p className="text-slate-300 text-sm pt-2">
                            <span className="font-semibold">OR JSON Body:</span>
                          </p>
                          <pre className="bg-slate-900 border border-slate-700 rounded p-3 overflow-x-auto text-xs text-gray-300 font-mono">
                            <code>{`{
  "file_base64": "string (base64)",
  "file_name": "document.pdf",
  "mime_type": "application/pdf"
}`}</code>
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-emerald-400 mb-2">Response</h4>
                        <pre className="bg-slate-800 border border-slate-700 rounded-lg p-4 overflow-x-auto text-xs text-gray-300 font-mono">
                          <code>{`{
  "status": "success",
  "data": {
    "integrity_score": 85,
    "risk_level": "low",
    "findings": [
      {
        "type": "suspicious_pattern",
        "severity": "info",
        "description": "..."
      }
    ],
    "ai_detection": {
      "text": {
        "is_ai_generated": false,
        "confidence": 0.92
      },
      "image": {
        "is_ai_generated": false,
        "confidence": 0.88
      }
    },
    "template_match": {
      "matched": true,
      "template_name": "Standard Contract",
      "confidence": 0.92
    },
    "file_info": {
      "name": "contract.pdf",
      "size": 12345,
      "type": "application/pdf",
      "sha256": "abc123..."
    },
    "execution_time_ms": 1234
  }
}`}</code>
                        </pre>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 mb-2">Rate Limit Headers</h4>
                        <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-xs text-gray-300 font-mono space-y-1">
                          <p>X-RateLimit-Limit: 60</p>
                          <p>X-RateLimit-Remaining: 59</p>
                          <p>X-RateLimit-Reset: 1708534023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* POST /api/v1/mask/detect */}
            <Card className="bg-slate-900 border-slate-800 overflow-hidden">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-baseline gap-3 pb-4 border-b border-slate-800">
                    <span className="px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded">POST</span>
                    <span className="font-mono text-lg text-emerald-400">/api/v1/mask/detect</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Detect PII in Documents</h3>
                      <p className="text-slate-400">
                        Scan PDF documents for personally identifiable information (PII) across multiple categories. Returns detailed matches with locations and confidence scores.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-emerald-400 mb-2">Request</h4>
                        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 space-y-3">
                          <p className="text-slate-300 text-sm">
                            <span className="font-semibold">Multipart Form Data:</span>
                          </p>
                          <ul className="text-slate-400 text-sm space-y-1 ml-4">
                            <li className="font-mono">file: File (PDF)</li>
                          </ul>
                          <p className="text-slate-300 text-sm pt-2">
                            <span className="font-semibold">OR JSON Body:</span>
                          </p>
                          <pre className="bg-slate-900 border border-slate-700 rounded p-3 overflow-x-auto text-xs text-gray-300 font-mono">
                            <code>{`{
  "file_base64": "string (base64)",
  "file_name": "contract.pdf",
  "mime_type": "application/pdf"
}`}</code>
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-emerald-400 mb-2">Response</h4>
                        <pre className="bg-slate-800 border border-slate-700 rounded-lg p-4 overflow-x-auto text-xs text-gray-300 font-mono">
                          <code>{`{
  "status": "success",
  "data": {
    "fileName": "contract.pdf",
    "fileSize": 54321,
    "totalMatches": 7,
    "categoryCounts": {
      "email": 3,
      "phone": 2,
      "ssn": 1,
      "address": 1
    },
    "matches": [
      {
        "type": "email",
        "text": "john@example.com",
        "startIndex": 150,
        "confidence": 0.98
      }
    ],
    "execution_time_ms": 456
  }
}`}</code>
                        </pre>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 mb-2">Supported PII Categories</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
                          <div className="flex items-center gap-2"><span className="text-emerald-500">•</span> Email addresses</div>
                          <div className="flex items-center gap-2"><span className="text-emerald-500">•</span> Phone numbers</div>
                          <div className="flex items-center gap-2"><span className="text-emerald-500">•</span> SSNs</div>
                          <div className="flex items-center gap-2"><span className="text-emerald-500">•</span> Addresses</div>
                          <div className="flex items-center gap-2"><span className="text-emerald-500">•</span> Bank accounts</div>
                          <div className="flex items-center gap-2"><span className="text-emerald-500">•</span> Credit cards</div>
                          <div className="flex items-center gap-2"><span className="text-emerald-500">•</span> Dates of birth</div>
                          <div className="flex items-center gap-2"><span className="text-emerald-500">•</span> Passport numbers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* POST /api/v1/mask/redact */}
            <Card className="bg-slate-900 border-slate-800 overflow-hidden">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-baseline gap-3 pb-4 border-b border-slate-800">
                    <span className="px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded">POST</span>
                    <span className="font-mono text-lg text-emerald-400">/api/v1/mask/redact</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Redact PII from Documents</h3>
                      <p className="text-slate-400">
                        Automatically redact specified PII categories from PDF documents. Returns a download URL for the redacted file and a summary of redacted data.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-emerald-400 mb-2">Request</h4>
                        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 space-y-3">
                          <p className="text-slate-300 text-sm">
                            <span className="font-semibold">Multipart Form Data:</span>
                          </p>
                          <ul className="text-slate-400 text-sm space-y-1 ml-4">
                            <li className="font-mono">file: File (PDF)</li>
                            <li className="font-mono">categories: JSON array string</li>
                          </ul>
                          <p className="text-slate-300 text-sm pt-2">
                            <span className="font-semibold">OR JSON Body:</span>
                          </p>
                          <pre className="bg-slate-900 border border-slate-700 rounded p-3 overflow-x-auto text-xs text-gray-300 font-mono">
                            <code>{`{
  "file_base64": "string (base64)",
  "file_name": "contract.pdf",
  "mime_type": "application/pdf",
  "categories": [
    "email",
    "phone",
    "ssn"
  ]
}`}</code>
                          </pre>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-emerald-400 mb-2">Response</h4>
                        <pre className="bg-slate-800 border border-slate-700 rounded-lg p-4 overflow-x-auto text-xs text-gray-300 font-mono">
                          <code>{`{
  "status": "success",
  "data": {
    "redactionId": "uuid-12345...",
    "downloadUrl": "https://app.useveriflo.com/...",
    "fileName": "contract-redacted.pdf",
    "redactionSummary": {
      "totalRedactions": 7,
      "categoriesRedacted": [
        "email",
        "phone",
        "ssn"
      ],
      "piiSummary": {
        "email": 3,
        "phone": 2,
        "ssn": 2
      },
      "processingTimeMs": 890
    },
    "execution_time_ms": 890
  }
}`}</code>
                        </pre>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 mb-2">Available Categories</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm text-slate-400 font-mono">
                          <div>• email</div>
                          <div>• phone</div>
                          <div>• ssn</div>
                          <div>• bank_account</div>
                          <div>• credit_card</div>
                          <div>• date_of_birth</div>
                          <div>• passport</div>
                          <div>• address</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rate Limits Section */}
      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-8 h-8 text-emerald-500" />
                Rate Limits & Usage
              </h2>
              <p className="text-slate-400 text-lg">
                API usage limits depend on your subscription plan. Rate limits reset every minute.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-4 px-4 font-semibold text-slate-300">Plan</th>
                    <th className="text-left py-4 px-4 font-semibold text-slate-300">Rate Limit</th>
                    <th className="text-left py-4 px-4 font-semibold text-slate-300">Integrity Checks</th>
                    <th className="text-left py-4 px-4 font-semibold text-slate-300">PII Detections</th>
                    <th className="text-left py-4 px-4 font-semibold text-slate-300">PII Redactions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="py-4 px-4 text-slate-400 font-mono">Free</td>
                    <td className="py-4 px-4 text-slate-400">No API access</td>
                    <td className="py-4 px-4 text-slate-400">10/month</td>
                    <td className="py-4 px-4 text-slate-400">5/month</td>
                    <td className="py-4 px-4 text-slate-400">5/month</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-slate-400 font-mono">Pro ($49/mo)</td>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">60 req/min</td>
                    <td className="py-4 px-4 text-slate-400">100/month</td>
                    <td className="py-4 px-4 text-slate-400">100/month</td>
                    <td className="py-4 px-4 text-slate-400">50/month</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-slate-400 font-mono">Enterprise ($149/mo)</td>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">600 req/min</td>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">Unlimited</td>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">Unlimited</td>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-200">Rate Limit Headers</h3>
                  <p className="text-slate-400 text-sm">
                    Every successful API response includes rate limit information in the response headers:
                  </p>
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 space-y-2 text-sm text-gray-300 font-mono">
                    <p>X-RateLimit-Limit: 60</p>
                    <p>X-RateLimit-Remaining: 45</p>
                    <p>X-RateLimit-Reset: 1708534080</p>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Check these headers to monitor your rate limit status and avoid hitting limits.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Error Codes Section */}
      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Error Handling</h2>
              <p className="text-slate-400 text-lg">
                The API uses standard HTTP status codes to indicate success or failure.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-4 px-4 font-semibold text-slate-300">Status Code</th>
                    <th className="text-left py-4 px-4 font-semibold text-slate-300">Error Code</th>
                    <th className="text-left py-4 px-4 font-semibold text-slate-300">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">200</td>
                    <td className="py-4 px-4 text-slate-400 font-mono">success</td>
                    <td className="py-4 px-4 text-slate-400">Request succeeded. Check response data.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-yellow-500 font-semibold">400</td>
                    <td className="py-4 px-4 text-slate-400 font-mono">bad_request</td>
                    <td className="py-4 px-4 text-slate-400">Invalid request format or missing required parameters.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-red-500 font-semibold">401</td>
                    <td className="py-4 px-4 text-slate-400 font-mono">unauthorized</td>
                    <td className="py-4 px-4 text-slate-400">Invalid, missing, or expired API key.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-red-500 font-semibold">429</td>
                    <td className="py-4 px-4 text-slate-400 font-mono">rate_limit_exceeded</td>
                    <td className="py-4 px-4 text-slate-400">Rate limit or usage quota exceeded. Retry after reset time.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-red-500 font-semibold">500</td>
                    <td className="py-4 px-4 text-slate-400 font-mono">internal_server_error</td>
                    <td className="py-4 px-4 text-slate-400">Server error. Try again later or contact support.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-slate-200">Error Response Format</h3>
                  <pre className="bg-slate-800 border border-slate-700 rounded-lg p-4 overflow-x-auto text-xs text-gray-300 font-mono">
                    <code>{`{
  "status": "error",
  "error": {
    "code": "unauthorized",
    "message": "Invalid or missing API key"
  }
}`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                <Code className="w-8 h-8 text-emerald-500" />
                Code Examples
              </h2>
              <p className="text-slate-400 text-lg">
                Example implementations for the document verification endpoint in different languages.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* cURL */}
              <Card className="bg-slate-900 border-slate-800 overflow-hidden">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">cURL</h3>
                    <pre className="bg-slate-800 border border-slate-700 rounded-lg p-4 overflow-x-auto text-xs text-gray-300 font-mono">
                      <code>{`curl -X POST \\
  https://app.useveriflo.com/api/v1/verify \\
  -H "Authorization: Bearer vf_your_api_key" \\
  -F "file=@document.pdf"`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Python */}
              <Card className="bg-slate-900 border-slate-800 overflow-hidden">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Python</h3>
                    <pre className="bg-slate-800 border border-slate-700 rounded-lg p-4 overflow-x-auto text-xs text-gray-300 font-mono">
                      <code>{`import requests

response = requests.post(
    "https://app.useveriflo.com/api/v1/verify",
    headers={
      "Authorization": 
        "Bearer vf_your_api_key"
    },
    files={"file": open("document.pdf", "rb")}
)
print(response.json())`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* JavaScript */}
              <Card className="bg-slate-900 border-slate-800 overflow-hidden">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">JavaScript</h3>
                    <pre className="bg-slate-800 border border-slate-700 rounded-lg p-4 overflow-x-auto text-xs text-gray-300 font-mono">
                      <code>{`const formData = new FormData();
formData.append("file", 
  fileInput.files[0]);

const response = await fetch(
  "https://app.useveriflo.com/api/v1/verify",
  {
    method: "POST",
    headers: {
      "Authorization": 
        "Bearer vf_your_api_key"
    },
    body: formData
  }
);
const data = await response.json();`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Integrate?</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Start building with Veriflo's API today. Get your API key in seconds and integrate document verification and PII management into your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-6 text-lg h-auto">
                <Link href="https://app.useveriflo.com/signup">
                  Sign Up Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="border-slate-700 hover:bg-slate-800 px-8 py-6 text-lg h-auto">
                <Link href="https://app.useveriflo.com/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">API</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#endpoints" className="hover:text-emerald-400 transition">Endpoints</a></li>
                <li><a href="#endpoints" className="hover:text-emerald-400 transition">Authentication</a></li>
                <li><a href="#endpoints" className="hover:text-emerald-400 transition">Rate Limits</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="https://app.useveriflo.com" className="hover:text-emerald-400 transition">Dashboard</a></li>
                <li><a href="https://app.useveriflo.com/settings/api-keys" className="hover:text-emerald-400 transition">API Keys</a></li>
                <li><a href="https://app.useveriflo.com/pricing" className="hover:text-emerald-400 transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="mailto:support@useveriflo.com" className="hover:text-emerald-400 transition">Email Support</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Status Page</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500 text-sm">
              © 2026 Veriflo. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
