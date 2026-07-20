interface Env {
  OPENAI_API_KEY: string;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const KNOWLEDGE_BASE = `# EFFINANCE FORACC LLP — KNOWLEDGE BASE

## Company Overview
Effinance Foracc LLP is a global accounting outsourcing company established in 2022 and headquartered in Ahmedabad, Gujarat, India. Its mission is to become a trusted "Global Accounting Solution Company," providing quality tax accounting and bookkeeping solutions with a personal touch. Effinance serves small and medium-sized businesses (SMBs) and CPA/bookkeeping firms in North America, offering account management, bookkeeping, tax planning, and advisory services. The company has completed 500+ hours of work and 15+ projects. It emphasizes 100% accuracy, confidentiality, and data protection, and also provides "Support Accountants" who work as an extension of other CPA and bookkeeping firms' teams.

## Vision & Mission
Vision: To be the trusted partner empowering individuals and businesses to achieve financial success through innovative solutions, personalized guidance, tax planning, and financial planning — becoming the best global outsourcing provider in accounting, bookkeeping, and advisory services, known for quality, consistency, and ethical practices.
Mission: Build an in-house team using advanced accounting software to stay ahead of market trends, and expand presence among CPA and bookkeeping firms across North America and beyond.
Method of Work — The 3 S's: Systematic Planning, Strategizing, Strong Solutions.

## About the Founder — Arpit Shah
Arpit Shah is the founder and a Licensed Certified Public Accountant (CPA), certified by the State Board of Montana, USA (Certificate PAC-CPA-LIC-433681, granted February 7, 2022). He has 7 years of experience in Taxation, Accounting, Auditing, and Financial Forecasting. His vision is that every individual becomes net debt-free and multiplies their wealth through effective tax planning. Outside work he enjoys cricket, financial seminars, and music.

## Core Service Categories
Three primary categories: Accounting Management, Bookkeeping, and Advisory Services. Plus Tax Preparation & Planning and Budgeting & Financial Forecasting as distinct service lines. Services can be availed individually, partially, or as a full outsourced package, with multiple customizable packages so clients only pay for what they need.

## Tax Preparation & Planning
Includes individual returns (Form 1040), partnership (1065), S-Corp (1120-S), C-Corp (1120), tax and financial planning including Cost Segregation Studies, and Schedule C to S-Corp conversion strategy to save on self-employment taxes. Tax planning is treated as an ongoing part of running a business to ensure minimum legal tax liability without compromising compliance.

## Accounting & Bookkeeping
Bookkeeping covers systematic recording of all business transactions. Tasks include reviewing the chart of accounts, reclassifying transactions, and maintaining consistency for accrual-basis clients and year-end adjustments. Three types: (1) General Bookkeeping — clients provide statements, Effinance enters them into the client's software; (2) CPA Write-Up — full ledger maintenance, AR/AP entries, and reconciliation; (3) Reports — trial balances, ledger entries, and debtor/creditor reports by aging. Can be outsourced fully or partially.

## Accounting Management
The broadest service area — evaluating a business's costs, data, and finances and organizing them into clear, decision-ready information. Includes: Preparation of Financial Statements (Balance Sheet, P&L, cash flow, financial ratios, AR/AP aging, depreciation and prepaid schedules, notes to accounts), Part-time Virtual CFO Services, Budget Preparation, Cash Flow Forecasting, Tax Planning, Bank & Credit Card Reconciliation, Accounts Payable Management, Accounts Receivable Management, Payroll, and customized MIS Reporting.

## Part-Time Virtual CFO Services
Strategic financial guidance for startups and SMBs without the cost of a full-time CFO: detailed financial insight, risk-reducing decision support, business plan viability analysis, ongoing monitoring, detailed budgets for new ventures, tax-saving strategies, product/service profitability analysis, cash flow management, and technical analysis (Ratio Analysis, Market Trend Analysis, NPV, IRR, cash conversion cycles, ROI).

## Budget Preparation
Budgets estimating income and cash outflows for the year ahead. Process: define business goals, estimate income, account for mandatory and miscellaneous expenses, and define surplus/deficit scenarios for adverse conditions.

## Cash Flow Forecasting
Helps flag shortfalls or surpluses in advance. Categories: Cash from Operations (core business in/out), Cash from Investments (selling/buying fixed assets, property), Cash from Financing (shares/loans in, loan repayments out).

## Accounts Payable & Receivable Management
Payable: handles and settles credit purchases and vendor loans, prioritizing bill payments by due date. Receivable: manages incoming receivables, ensuring payments are collected on time and credited correctly, in full compliance.

## Bank & Credit Card Reconciliation
Tracks every bank transaction and cross-verifies against credit card statements, vendor invoices, and daily entries, including cheques received, issued, bounced, cleared, or cancelled.

## Payroll
Timely, accurate monthly payroll disbursement. Also offered specifically to CPA firms in the USA to save time and internal resources.

## MIS Reporting (Customized Reports)
Custom reports based on client scale and needs. Examples: Budget vs. Actual, P&L by class/month, Quarterly P&L Summary, priority vendor/customer reports, invoice and payment tracking, AR/AP Aging, Sales Tax Reports, voided cheque summaries, department-wise salary reports, tax liability reports, manufacturing cost reports, supplier reports.

## Budgeting & Financial Forecasting
Forward-looking planning: preparing budgets, cash forecasting, debt management, asset allocation management.

## Advisory Services
Helps businesses of any size make better strategic decisions. Business Services & Outsourcing Advisory: fund management, project feasibility, process monitoring. Management Advisory: assets, finance, employee productivity, legal proceedings, portfolio building, investment advice. Accounting & Reporting Advisory: analysis of performance, cash flows, and assets vs liabilities to guide growth.

## Data Security & Privacy
Measures: spam protection, prevention of information leakage, data/email backup, secure file exchange, virus protection, email continuity. Achieved via limited data access, mandatory NDAs, strong firewall and 256-bit SSL encryption, oversight of email exchanges, sophisticated authentication, and end-to-end transaction tracking — all included at no additional cost.

## Software & Technology
Corvee (tax planning), Forecastr (forecasting), TaxDome (practice management), Xero, QuickBooks, Bill.com, Sage, Sage Intacct, Odoo.

## Our Process
Five steps: Understanding Your Needs, Data Collection, Analysis, Customized Solutions, and Ongoing Support.

## Who Effinance Serves
SMBs across industries; CPA and bookkeeping firms across North America (via Support Accountant staffing and payroll outsourcing); and individuals seeking tax planning and financial guidance. Packages suit any size, and clients only pay for services they need.

## Licenses & Certifications
CPA License (Arpit Shah — State Board of Montana, USA) and LLP Certificate of Incorporation.

## Contact
Email: arpit.shah@effinanceforacc.com | Phone: +91 97259 46540 | Website: www.effinanceforacc.com | India Office: B-812, Titanium City Center, Near Income Tax Building, 100ft Road, Satellite, Ahmedabad, Gujarat, India – 380015.

## FAQ
Q: What does Effinance do? A: An accounting outsourcing firm offering tax prep, bookkeeping, accounting management, budgeting/forecasting, and advisory services to SMBs and CPA firms, primarily in North America, based in Ahmedabad, India.
Q: Who founded it? A: Arpit Shah, a Licensed CPA (State Board of Montana, USA) with 7 years of experience.
Q: What software? A: Corvee, Forecastr, TaxDome, Xero, QuickBooks, Bill.com, Sage, Sage Intacct, Odoo.
Q: What tax forms? A: 1040, 1065, 1120-S, 1120, plus tax planning, cost segregation, and Schedule C to S-Corp conversions.
Q: Work with CPA firms? A: Yes — Support Accountants, payroll outsourcing, and back-office support for CPA/bookkeeping firms across North America.
Q: Data security? A: 256-bit SSL, NDAs, limited access, secure exchange, virus protection, end-to-end tracking.
Q: Contact? A: arpit.shah@effinanceforacc.com, +91 97259 46540, or the Ahmedabad office.
Q: Virtual CFO? A: Yes, part-time virtual CFO services for startups and SMBs.
Q: Pricing? A: Tailored to each business's size and needs with multiple customizable packages — the best next step is a quick consultation for an accurate quote.`;

const SYSTEM_PROMPT = `You are the official website assistant for Effinance Foracc LLP, an accounting outsourcing firm.
Answer ONLY using the context below. If the answer isn't in the context, say you're not certain and offer to connect the visitor with the team via email (arpit.shah@effinanceforacc.com) or phone (+91 97259 46540).
NEVER state specific pricing or fees — offer a consultation instead.
If the user asks for a quote, consultation, or callback, end your reply with the exact marker [[LEAD_FORM]].

Context:
${KNOWLEDGE_BASE}`;

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Single handler for ALL methods so POST is guaranteed to hit our code.
export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405);
  }

  if (!env.OPENAI_API_KEY) {
    return json({ error: 'OPENAI_API_KEY is not configured on Cloudflare' }, 500);
  }

  let history: ChatMessage[] = [];
  try {
    const body = (await request.json()) as { messages?: ChatMessage[]; message?: string };
    if (Array.isArray(body.messages)) {
      history = body.messages
        .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
        .map((m) => ({ role: m.role, content: m.content.trim() }))
        .filter((m) => m.content.length > 0);
    } else if (typeof body.message === 'string' && body.message.trim()) {
      history = [{ role: 'user', content: body.message.trim() }];
    }
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  if (history.length === 0) {
    return json({ error: 'Message is required' }, 400);
  }

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.2,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...history],
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('OpenAI error:', res.status, errText);
      return json({ error: 'LLM request failed' }, 500);
    }

    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const reply = data.choices?.[0]?.message?.content?.trim() || '';
    return json({ reply });
  } catch (err) {
    console.error('Chat function error:', err);
    return json({ error: err instanceof Error ? err.message : 'LLM request failed' }, 500);
  }
};