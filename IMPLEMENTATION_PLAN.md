FurniStack SaaS Platform

Autonomous Project Execution Instructions

You are acting as a senior full-stack software engineer.

Your task is to execute the project strictly according to the Implementation Plan provided below.

Rules:

1. Follow the implementation plan phase by phase without skipping steps.

2. When a phase is completed, automatically proceed to the next phase.

3. Do not stop after completing a task unless:
    ◦ Critical information is missing.
    ◦ A security-sensitive decision requires approval.
    ◦ An external service credential is required.
    ◦ The implementation plan is fully completed.

4. Maintain a running progress log in a file called IMPLEMENTATION_PROGRESS.md.

5. After each completed phase:
    ◦ Update the progress log.
    ◦ Commit all code changes.
    ◦ Continue to the next phase automatically.

6. If an issue is discovered:
    ◦ Attempt to fix it.
    ◦ Document the fix.
    ◦ Continue execution.

7. Always prefer completing work over asking for confirmation.

8. At every checkpoint, determine the next task from the implementation plan and immediately execute it.

9. Continue until 100% of the implementation plan is complete.

10. Only stop when:
    ◦ The entire implementation plan is implemented.
    ◦ A blocking dependency prevents progress.

Current Objective:

Implement the entire project according to the implementation plan below:
[{You should audit first, then implement continuously until the acceptance criteria are met.

FurniStack SAAS PLATFORM
FINAL MASTER CODING AGENT SPECIFICATION

COMPLETE REQUIREMENTS, ARCHITECTURE, DATABASE, UI/UX, API, SECURITY, QA, IMPLEMENTATION PLAN & AUTONOMOUS EXECUTION SPECIFICATION

---

0. DOCUMENT PURPOSE

This document is the single source of truth for the development of the Furniture SaaS Platform.

The coding agent must use this document to:

- Audit the existing project.
- Understand the complete target architecture.
- Identify existing functionality.
- Identify missing functionality.
- Identify broken functionality.
- Identify architectural problems.
- Identify security vulnerabilities.
- Implement missing functionality.
- Refactor existing functionality where necessary.
- Test every implementation.
- Perform browser-level verification.
- Perform security verification.
- Continue through all implementation phases.
- Prepare the application for production.

Do not treat this as a collection of unrelated tasks.

Treat it as the complete product and engineering specification.

---

1. PROJECT OVERVIEW

Build a production-ready multi-tenant SaaS platform for furniture businesses, combined with a multi-vendor furniture marketplace.

The platform allows independent furniture businesses to create and operate online stores through the platform.

>[NOTE]: The SaaS Platform will be called "FurniStack" and then add this brief creative text "The Complete Growth For Furniture Stores" beside its name describing what it does.

>**NB:** The UI used for the FurniStack Platform pages will be "Glasmorphic, Walnut Brown + Beige + Dark Charcoal (make sure you design also its light mode accordingly)" and also design a Demo Store with the same UI as the FurniStack platform you can reuse the name "FurniStack" as the name of the demo store, this demo store will be used as a form of testing all the features that the Furniture stores will have, for more accuracy when designing the pages for the FurniStack Platform and FurniStack Demo store UI use the same UI Color and Fonts as shown in the 3 images in the project root Understood.

Each furniture business must be able to:

- Create a business account.
- Create one or more stores where permitted by plan.
- Customize its storefront.
- Add and manage furniture products.
- Create product variants.
- Create customizable furniture options.
- Manage categories and brands.
- Manage inventory.
- Manage warehouses.
- Manage customers.
- Manage orders.
- Accept customer payments.
- Manage deliveries.
- Manage staff.
- Manage reviews.
- Manage marketing.
- View analytics.
- Manage subscriptions.
- Manage billing.
- Connect custom domains where permitted.
- Use future advanced furniture capabilities such as 3D, AR, room planning and AI.

Customers must be able to discover stores and furniture through a centralized marketplace and purchase from individual merchant stores.

The platform owner must have a separate administrative system for managing the entire SaaS platform.

---

2. PRODUCT MODEL

The system has three primary commercial layers.

2.1 SaaS Platform

The platform sells software/services to furniture businesses.

Relationship:

Merchant → Platform

Examples:

- Monthly subscription.
- Annual subscription.
- Premium features.
- Additional stores.
- Additional staff.
- Advanced analytics.
- Custom domains.
- AI features.

---

2.2 Merchant Store

Each furniture business operates one or more online stores through the SaaS platform.

Relationship:

Tenant
   ↓
Store
   ↓
Products
Inventory
Orders
Customers
Staff
Analytics
Settings

---

2.3 Marketplace

The platform can expose participating merchant stores and their products through a centralized marketplace.

Relationship:

Customer
   ↓
Marketplace
   ↓
Merchant Store
   ↓
Furniture Product

---

3. REQUIRED TECHNOLOGY STACK

The project must use:

Frontend
- Next.js
- React
- TypeScript

Backend
- Node.js runtime
- Next.js API Routes / Route Handlers
- TypeScript

Database
- Neon PostgreSQL

ORM
- Prisma

Storage
- Cloudflare R2 Storage

Authentication
- Auth.js
- Next.js Middleware

Hosting
- Vercel by default


Validation
- Zod or equivalent runtime schema validation

Testing
- Vitest or Jest
- Playwright

Payments
- M-Pesa Daraja API
- Card Payments
- Webhooks where necessary

Messages
- Resend for emails
- WhatsApp Cloud API 
- Twilio for SMS

Use TypeScript throughout the project.

Avoid JavaScript unless there is a documented technical reason.

Avoid "any" unless genuinely unavoidable.

>**NB:** For more Info about Project Architecture rules check out and read [rules.md](rules.md) file at the project root.
---

4. CORE ARCHITECTURAL PRINCIPLES

The application must be:

- Multi-tenant.
- Secure.
- Scalable.
- Maintainable.
- Modular.
- Testable.
- Responsive(Smaller Screens, Mobiles, Tablets, ipads, Laptops, Desktops and Larger Screens).
- Accessible.
- SEO-friendly.
- Production-ready.

The application must NOT be architected as a single furniture store that is later modified into a SaaS platform.

Multi-tenancy must be considered from the beginning.

---

5. MAJOR APPLICATION AREAS

The application consists of:

Public Platform
Marketplace
Merchant Storefronts
Merchant Dashboard
Platform Administration
Authentication
Multi-Tenancy
Catalog
Furniture Customization
Inventory
Customers
Cart
Checkout
Orders
Payments
Delivery
Reviews
Marketing
Notifications
SaaS Billing
Subscriptions
Merchant Payouts
Analytics
Staff Management
Store Builder
Custom Domains
Support
Security
Monitoring
Testing

---

6. USER TYPES

6.1 Platform Administrators

Support:

SUPER_ADMIN
PLATFORM_ADMIN
FINANCE_ADMIN
SUPPORT_ADMIN
CONTENT_ADMIN

Platform administrators operate outside normal merchant tenant permissions.

---

6.2 Merchant Users

Support:

OWNER
ADMIN
MANAGER
INVENTORY_MANAGER
SALES_STAFF
MARKETING_STAFF
DELIVERY_STAFF

Permissions must be centrally managed.

---

6.3 Customers

Customers can:

- Browse marketplace.
- Browse stores.
- Browse products.
- Search.
- Filter.
- Customize furniture.
- Add to cart.
- Checkout.
- Pay.
- Track orders.
- Review products.
- Follow stores.
- Manage their account.

Guest checkout may be supported where appropriate.

---

7. MULTI-TENANCY

This is one of the most important requirements.

A tenant represents a furniture business.

A tenant may have one or more stores depending on its subscription plan.

Every tenant-owned resource must be associated with the correct tenant and/or store.

Examples:

Tenant
Store
Product
Category
Brand
Inventory
Warehouse
Customer
Order
Payment
Subscription
Invoice
Delivery
Review
Analytics
Staff
Store Configuration

---

8. TENANT ISOLATION

Tenant isolation must be enforced server-side.

Never trust:

tenantId
storeId
userId

provided by the frontend.

The server must:

Authenticate user
        ↓
Resolve tenant
        ↓
Resolve store
        ↓
Verify membership
        ↓
Verify permission
        ↓
Perform operation

A malicious user must never be able to access another tenant by modifying:

- URL parameters.
- Query parameters.
- Request body.
- Cookies.
- Headers.
- IDs.
- API requests.

---

9. TENANT RESOLUTION

Support:

Development path

/store/[storeSlug]

Subdomain

merchant.platform.com

Custom domain

www.merchantdomain.com

The incoming host/domain must be securely mapped to the correct store.

Do not allow a client to arbitrarily select another tenant.

---

10. AUTHENTICATION

Use Auth.js.

Support appropriate:

- Registration.
- Login.
- Logout.
- Sessions.
- Email verification.
- Password reset.
- OAuth where appropriate.
- Account management.

Authentication answers:

«Who is the user?»

Authorization answers:

«What can the user do?»

Never rely on authentication alone.

---

11. AUTHORIZATION / RBAC

Implement centralized role and permission checking.

Example permissions:

products.read
products.create
products.update
products.delete

orders.read
orders.update
orders.cancel
orders.refund

inventory.read
inventory.update

customers.read
customers.update

analytics.read

staff.read
staff.manage

store.read
store.update

billing.read
billing.manage

marketing.read
marketing.manage

Frontend UI restrictions are only for UX.

Actual authorization must occur server-side.

---

12. DATABASE ARCHITECTURE

Use:

Neon PostgreSQL
+
Prisma ORM

The database must support:

- Strong relationships.
- Tenant isolation.
- Indexes.
- Unique constraints.
- Transactions.
- Historical snapshots.
- Inventory integrity.
- Financial integrity.
- Auditability.
- Safe migrations.

Use Prisma migrations.

Do not manually modify production schema without a migration.

---

13. DATABASE ID STRATEGY

Use a consistent server-generated identifier strategy.

Recommended:

String @id @default(cuid())

or an equally appropriate consistent strategy.

Do not mix ID strategies unnecessarily.

---

14. AUTHENTICATION DATABASE MODELS

User

Fields should include:

id
name
email
emailVerified
image
phone
phoneVerified
passwordHash
status
lastLoginAt
createdAt
updatedAt

Statuses may include:

ACTIVE
INACTIVE
SUSPENDED
BANNED
PENDING

A user must be able to participate in different contexts where the architecture requires it.

Do not assume one user equals one merchant.

---

Account

Use the appropriate Auth.js account model for the selected version.

Include provider-related authentication data.

---

Session

Use the appropriate Auth.js session model.

---

VerificationToken

Use the appropriate Auth.js verification model.

---

15. TENANT MODEL

Tenant

Represents a furniture business.

Fields:

id
name
slug
legalName
email
phone
country
currency
timezone
status
logo
description
createdAt
updatedAt

Statuses:

TRIAL
ACTIVE
SUSPENDED
CANCELLED

Requirements:

- Unique slug.
- Owner relationship.
- Subscription relationship where applicable.

---

16. STORE MODEL

Store

Fields:

id
tenantId
name
slug
description
logo
favicon
email
phone
address
city
country
currency
timezone
status
createdAt
updatedAt

Statuses:

DRAFT
ACTIVE
SUSPENDED
ARCHIVED

Tenant + slug should be unique where appropriate.

---

17. STORE MEMBERS

StoreMember

Fields:

id
tenantId
userId
roleId
status
createdAt
updatedAt

A user may have different roles in different tenants.

---

18. RBAC DATABASE MODELS

Role

id
tenantId
name
description
isSystemRole
createdAt
updatedAt

Permission

id
key
name
description

RolePermission

roleId
permissionId

Ensure role/permission combinations are unique.

---

19. PRODUCT CATALOG

Product

Support:

id
tenantId
storeId
categoryId
brandId
name
slug
description
shortDescription
sku
basePrice
compareAtPrice
costPrice
currency
status
featured
publishedAt
createdAt
updatedAt
deletedAt

Statuses:

DRAFT
ACTIVE
ARCHIVED
OUT_OF_STOCK
DISCONTINUED

---

20. PRODUCT VARIANTS

Support:

- Size.
- Color.
- Material.
- Configuration.
- Other product variations.

Fields:

id
productId
sku
name
price
compareAtPrice
costPrice
stockTracking
weight
dimensions
status
createdAt
updatedAt

---

21. PRODUCT IMAGES

Fields:

id
productId
variantId
url
storageKey
altText
width
height
sortOrder
isPrimary
createdAt
updatedAt

Store images externally.

Do not store large binary images directly in PostgreSQL.

---

22. PRODUCT VIDEOS

Support:

id
productId
url
thumbnailUrl
provider
sortOrder
createdAt
updatedAt

---

23. CATEGORIES

Support hierarchical categories.

Fields:

id
tenantId
storeId
parentId
name
slug
description
image
sortOrder
status
createdAt
updatedAt

Example:

Furniture
 ├── Living Room
 │    ├── Sofas
 │    └── Coffee Tables
 ├── Bedroom
 │    ├── Beds
 │    └── Wardrobes
 └── Office
      ├── Office Chairs
      └── Office Desks

---

24. BRANDS

Fields:

id
tenantId
storeId
name
slug
description
logo
website
status
createdAt
updatedAt

---

25. PRODUCT TAGS

Support many-to-many relationships between products and tags.

---

26. FURNITURE-SPECIFIC PRODUCT DATA

Products should support attributes such as:

material
woodType
fabric
color
width
height
depth
weight
style
assemblyRequired

Use strongly typed fields for core business data.

Use extensible configuration only where appropriate.

---

27. FURNITURE CUSTOMIZATION

Support configurable product options.

ProductOption

id
productId
name
type
required
sortOrder

Types:

SELECT
COLOR
TEXT
NUMBER
BOOLEAN

Examples:

Material
Color
Fabric
Wood Type
Size
Finish
Leg Style

---

ProductOptionValue

id
optionId
name
value
priceAdjustment
image
sortOrder

Example:

Leather +5000
Fabric +0
Velvet +3000

---

28. PRICING ENGINE

Pricing must be calculated server-side.

Conceptually:

Base Price
+ Variant Price
+ Customization
+ Add-ons
+ Delivery
- Discount
+ Tax
=
Final Price

Never trust frontend-submitted totals.

Create centralized pricing logic.

The same pricing logic must not be duplicated across multiple parts of the application.

---

29. INVENTORY

Support:

- Quantity.
- Reserved quantity.
- Available quantity.
- Low-stock threshold.
- Inventory tracking.
- Multiple warehouses.
- Stock movements.
- Transfers.
- Returns.
- Damage.
- Adjustments.
- Reservations.

---

30. INVENTORY ITEM

Fields:

id
tenantId
storeId
productId
variantId
quantity
reservedQuantity
availableQuantity
lowStockThreshold
trackInventory
createdAt
updatedAt

Available stock must be calculated consistently.

Do not allow arbitrary client-side stock manipulation.

---

31. WAREHOUSE

Fields:

id
tenantId
storeId
name
address
city
country
status
createdAt
updatedAt

---

32. WAREHOUSE STOCK

Fields:

id
warehouseId
productId
variantId
quantity
reservedQuantity
createdAt
updatedAt

Use appropriate uniqueness constraints.

---

33. STOCK MOVEMENTS

Every significant inventory adjustment should create a movement.

Fields:

id
tenantId
warehouseId
productId
variantId
type
quantity
referenceType
referenceId
reason
createdAt
createdBy

Types:

PURCHASE
SALE
RETURN
ADJUSTMENT
TRANSFER_IN
TRANSFER_OUT
DAMAGE
RESERVATION
RELEASE

---

34. STOCK RESERVATIONS

Fields:

id
tenantId
productId
variantId
cartId
orderId
quantity
expiresAt
status
createdAt
updatedAt

Statuses:

ACTIVE
RELEASED
CONVERTED
EXPIRED

Expired reservations must be released.

---

35. CONCURRENCY PROTECTION

Inventory operations must be safe under concurrent requests.

Do not use unsafe logic such as:

Read stock
↓
Check stock
↓
Write stock

without transactional protection.

Use appropriate PostgreSQL transaction and locking mechanisms.

---

36. CUSTOMER MODEL

Customer

Fields:

id
tenantId
userId
email
phone
firstName
lastName
status
createdAt
updatedAt

The same person may be a customer of multiple stores.

Customer records must remain tenant-aware.

---

37. CUSTOMER ADDRESS

Fields:

id
customerId
label
firstName
lastName
phone
addressLine1
addressLine2
city
county
country
postalCode
latitude
longitude
isDefault
createdAt
updatedAt

---

38. CART

For MVP use a single-store cart.

This simplifies:

- Checkout.
- Delivery.
- Tax.
- Payment.
- Merchant ownership.
- Order creation.

Architecture may later support multi-store carts.

Cart:

id
tenantId
storeId
customerId
sessionId
currency
status
expiresAt
createdAt
updatedAt

Statuses:

ACTIVE
CHECKED_OUT
ABANDONED
EXPIRED

---

39. CART ITEMS

Fields:

id
cartId
productId
variantId
quantity
unitPrice
customizationSnapshot
createdAt
updatedAt

Checkout must revalidate all pricing and inventory.

---

40. WISHLISTS

Wishlist

id
customerId
storeId
createdAt
updatedAt

WishlistItem

id
wishlistId
productId
createdAt

---

41. ORDERS

Order

Fields:

id
tenantId
storeId
customerId
orderNumber
status
paymentStatus
fulfillmentStatus
currency
subtotal
discount
tax
deliveryFee
total
customerSnapshot
shippingAddressSnapshot
billingAddressSnapshot
notes
createdAt
updatedAt

Statuses:

PENDING
CONFIRMED
PROCESSING
READY_FOR_DELIVERY
OUT_FOR_DELIVERY
DELIVERED
COMPLETED
CANCELLED
REFUNDED

Payment statuses:

PENDING
AUTHORIZED
PAID
FAILED
PARTIALLY_REFUNDED
REFUNDED

Fulfillment:

UNFULFILLED
PARTIALLY_FULFILLED
FULFILLED

---

42. ORDER ITEMS

Fields:

id
orderId
productId
variantId
productNameSnapshot
skuSnapshot
variantSnapshot
customizationSnapshot
unitPrice
quantity
discount
tax
total
createdAt

Historical snapshots are mandatory.

Changing the current product must not modify historical orders.

---

43. ORDER STATUS HISTORY

Fields:

id
orderId
status
note
changedBy
createdAt

Every significant order transition must be recorded.

---

44. CHECKOUT FLOW

The checkout process should follow:

Cart
 ↓
Validate customer
 ↓
Validate products
 ↓
Validate variants
 ↓
Validate customization
 ↓
Validate inventory
 ↓
Calculate prices
 ↓
Calculate discounts
 ↓
Calculate tax
 ↓
Calculate delivery
 ↓
Reserve inventory
 ↓
Create pending order
 ↓
Create payment
 ↓
Initiate payment
 ↓
Verify payment
 ↓
Confirm order

Never trust:

- Frontend price.
- Frontend total.
- Frontend discount.
- Frontend tax.
- Frontend stock.
- Frontend payment status.

---

45. PAYMENT ARCHITECTURE

Create a payment abstraction.

Example:

PaymentProvider

Possible implementations:

MpesaProvider
CardProvider
BankTransferProvider

Additional providers must be possible without rewriting commerce logic.

---

46. PAYMENTS

Payment

Fields:

id
tenantId
storeId
orderId
provider
providerPaymentId
amount
currency
status
paymentMethod
createdAt
updatedAt

Statuses:

PENDING
PROCESSING
SUCCESS
FAILED
CANCELLED
REFUNDED
PARTIALLY_REFUNDED

---

47. PAYMENT TRANSACTIONS

Fields:

id
paymentId
providerTransactionId
type
amount
currency
status
rawReference
metadata
createdAt

Types:

CHARGE
REFUND
REVERSAL
ADJUSTMENT

---

48. REFUNDS

Support:

id
paymentId
orderId
amount
reason
status
providerRefundId
createdAt
processedAt

Refunds must be authorized and audited.

---

49. PAYMENT WEBHOOKS

All payment webhooks must:

- Verify authenticity.
- Validate payload.
- Verify transaction.
- Be idempotent.
- Prevent replay attacks.
- Prevent duplicate payments.
- Prevent duplicate orders.
- Update state server-side.
- Record appropriate audit information.

Never trust the frontend as final payment authority.

---

50. SAAS BILLING

SaaS billing is completely separate from commerce payments.

Merchant → Platform

Commerce payments:

Customer → Merchant

Never combine these flows into one generic payment implementation.

---

51. SUBSCRIPTION PLANS

SubscriptionPlan

Fields:

id
name
slug
description
price
currency
billingInterval
trialDays
maxProducts
maxStaff
maxStores
maxWarehouses
features
status
createdAt
updatedAt

Billing intervals:

MONTHLY
YEARLY

Do not hardcode plan limits throughout the codebase.

---

52. MERCHANT SUBSCRIPTIONS

Subscription

Fields:

id
tenantId
planId
status
provider
providerSubscriptionId
currentPeriodStart
currentPeriodEnd
trialStart
trialEnd
cancelAtPeriodEnd
cancelledAt
createdAt
updatedAt

Statuses:

TRIALING
ACTIVE
PAST_DUE
GRACE_PERIOD
CANCELLED
EXPIRED

---

53. SUBSCRIPTION ITEMS

Fields:

id
subscriptionId
name
quantity
unitPrice
amount
createdAt

---

54. SAAS INVOICES

Invoice

Fields:

id
tenantId
subscriptionId
invoiceNumber
status
subtotal
tax
discount
total
currency
dueDate
paidAt
createdAt
updatedAt

Statuses:

DRAFT
OPEN
PAID
VOID
UNCOLLECTIBLE

---

55. INVOICE ITEMS

Fields:

id
invoiceId
description
quantity
unitPrice
amount
createdAt

---

56. BILLING TRANSACTIONS

Fields:

id
tenantId
invoiceId
provider
providerTransactionId
amount
currency
status
createdAt
updatedAt

These records represent:

Merchant → Platform

They must remain separate from:

Customer → Merchant

commerce payment records.

---

57. MERCHANT PAYOUTS

If the platform collects customer payments before distributing funds to merchants, support:

Payout

Fields:

id
tenantId
storeId
amount
currency
status
periodStart
periodEnd
provider
providerReference
processedAt
createdAt
updatedAt

Statuses:

PENDING
PROCESSING
PAID
FAILED
ON_HOLD

---

58. ENTITLEMENT SYSTEM

Create centralized subscription entitlement logic.

Examples:

canCreateProduct()
canAddStaff()
canCreateStore()
canUseCustomDomain()
canUseAdvancedAnalytics()
canUseAI()
canUseWholesale()

Do not duplicate plan checks throughout UI and API code.

---

59. BILLING WEBHOOKS

Billing webhooks must:

- Verify authenticity.
- Validate payload.
- Be idempotent.
- Prevent duplicate invoices.
- Prevent duplicate transactions.
- Update subscriptions safely.
- Record billing history.
- Handle failed payments.
- Handle cancellation.
- Handle renewal.
- Handle grace periods.

## NB// What I Would Do for FurniStack in Kenya

Setup Fee: KSh 5,000 (is the same across all plans)

6 Months Usage: Free (after paying the Setup fee of Ksh 5,000 when creating store.)

After 6 Months:
KSH 1,500/month for Starter Plan
KSH 3,000/month for Growth Plan
KSH 6000/month for Enterprise Plan

This filters out non-serious merchants.

After a 6-months free usage the merchant store owner will now be needed to pay for the recurring monthly subscription depending on the plan he initially chosen when creating their store.

The setup fee covers:
Store setup
Onboarding
Support
Training

The merchant then has six months to determine whether the platform is worth the recurring fee.

That aligns with my reasoning: furniture businesses often need more than a month to build confidence that the platform is actually helping their business.
---

60. DELIVERY

Support:

PICKUP
LOCAL_DELIVERY
COURIER
CUSTOM

Delivery pricing may depend on:

- Zone.
- Distance.
- Weight.
- Furniture dimensions.
- Order value.
- Free-delivery threshold.

---

61. DELIVERY ZONES

Fields:

id
tenantId
storeId
name
description
fee
minimumOrder
freeDeliveryThreshold
status
createdAt
updatedAt

---

62. DELIVERY METHODS

Fields:

id
tenantId
storeId
name
type
price
estimatedMinDays
estimatedMaxDays
status
createdAt
updatedAt

---

63. DELIVERY RECORD

Fields:

id
orderId
methodId
driverId
trackingNumber
status
scheduledAt
deliveredAt
notes
createdAt
updatedAt

Statuses:

PENDING
SCHEDULED
PICKED_UP
IN_TRANSIT
OUT_FOR_DELIVERY
DELIVERED
FAILED
CANCELLED

---

64. DELIVERY STATUS HISTORY

Track:

id
deliveryId
status
location
note
createdAt

---

65. DRIVERS

Fields:

id
tenantId
name
phone
email
vehicle
status
createdAt
updatedAt

---

66. PRODUCT REVIEWS

Fields:

id
tenantId
storeId
productId
customerId
orderId
rating
title
content
status
createdAt
updatedAt

Statuses:

PENDING
APPROVED
REJECTED
HIDDEN

Support verified-purchase reviews.

---

67. STORE REVIEWS

Support:

id
tenantId
storeId
customerId
rating
content
status
createdAt
updatedAt

---

68. STORE FOLLOWERS

Fields:

id
storeId
customerId
createdAt

Store/customer combination should be unique.

---

69. FEATURED PRODUCTS

Support:

id
productId
storeId
startAt
endAt
priority
createdAt

---

70. FEATURED STORES

Support:

id
storeId
startAt
endAt
priority
createdAt

---

71. STORE THEMING

StoreTheme

Support:

id
storeId
name
logo
primaryColor
secondaryColor
accentColor
fontFamily
borderRadius
layout
settings
createdAt
updatedAt

The storefront must dynamically render according to store configuration.

---

72. STORE PAGES

Support:

id
storeId
name
slug
title
description
status
createdAt
updatedAt

---

73. STORE SECTIONS

Support:

id
pageId
type
title
content
settings
sortOrder
visible
createdAt
updatedAt

Section types may include:

HERO
PRODUCT_GRID
CATEGORY_GRID
FEATURED_PRODUCTS
ABOUT
BANNER
TESTIMONIALS
REVIEWS
CONTACT
NEWSLETTER
FAQ
CUSTOM_HTML

Sanitize unsafe content.

Never execute arbitrary unsanitized HTML.

---

74. STORE BUILDER

Merchants must be able to customize:

- Logo.
- Colors.
- Fonts.
- Hero sections.
- Product grids.
- Category sections.
- Banners.
- Testimonials.
- About section.
- Contact section.
- FAQ.
- Reviews.
- Newsletter.
- Footer.
- Navigation.

Do not create a separate hardcoded storefront implementation for every merchant.

Use a reusable storefront rendering engine.

---

75. CUSTOM DOMAINS

Support:

Merchant enters domain
 ↓
Generate verification record
 ↓
Merchant configures DNS
 ↓
Verify DNS
 ↓
Mark verified
 ↓
Configure domain
 ↓
SSL
 ↓
Map domain to store

Domain records should contain:

id
tenantId
storeId
domain
verificationToken
verificationStatus
sslStatus
isPrimary
createdAt
updatedAt

Statuses:

PENDING
VERIFIED
FAILED
SUSPENDED

Never allow an unverified domain to arbitrarily map to a tenant.

---

76. MARKETPLACE

Marketplace must support:

- Store discovery.
- Product discovery.
- Categories.
- Search.
- Filters.
- Featured stores.
- Featured products.
- Store ratings.
- Product ratings.
- Trending products.
- New stores.
- Promotional content.

Marketplace visibility must respect:

- Store status.
- Product status.
- Merchant status.
- Subscription entitlements.
- Platform moderation.

---

77. CUSTOMER MARKETPLACE EXPERIENCE

A customer should be able to:

Marketplace
 ↓
Search/filter
 ↓
Store
 ↓
Category
 ↓
Product
 ↓
Customization
 ↓
Cart
 ↓
Checkout
 ↓
Payment
 ↓
Order
 ↓
Delivery
 ↓
Review

---

78. MERCHANT DASHBOARD

Create:

/dashboard

Sections:

Overview
Products
Categories
Inventory
Orders
Customers
Reviews
Analytics
Staff
Store
Store Builder
Delivery
Marketing
Billing
Settings

Dashboard should display useful information such as:

- Revenue.
- Orders.
- Customers.
- Low-stock products.
- Pending orders.
- Recent activity.
- Sales trends.

---

79. PLATFORM ADMIN DASHBOARD

Create:

/admin

Sections:

Overview
Tenants
Stores
Users
Products
Orders
Payments
Subscriptions
Revenue
Payouts
Reviews
Marketplace
Content
Support
Reports
Audit Logs
Platform Settings

---

80. PLATFORM ANALYTICS

Support:

- Total merchants.
- Active merchants.
- New merchants.
- Subscription revenue.
- Commerce volume.
- Platform revenue.
- Orders.
- Customers.
- Failed payments.
- Churn.
- Subscription status.
- Marketplace activity.

---

81. MERCHANT ANALYTICS

Support:

- Revenue.
- Orders.
- Units sold.
- Product views.
- Store views.
- Customers.
- Conversion rate.
- Repeat customers.
- Popular products.
- Inventory performance.

---

82. ANALYTICS ARCHITECTURE

Do not force every dashboard request to perform expensive raw-table aggregation.

Separate:

Operational transactional data

from:

Analytical aggregation

Use aggregated structures where appropriate.

Potential data:

DailyStoreAnalytics
ProductAnalytics
CustomerAnalytics
SalesAnalytics

---

83. NOTIFICATIONS

Create notification abstractions:

EmailProvider
SmsProvider
WhatsAppProvider
PushProvider

Channels:

IN_APP
EMAIL
SMS
WHATSAPP
PUSH

Events may include:

UserRegistered
StoreCreated
OrderPlaced
PaymentConfirmed
PaymentFailed
OrderShipped
OrderDelivered
SubscriptionRenewed
SubscriptionPaymentFailed
StockLow

---

84. BACKGROUND JOBS

Background processing may be used for:

- Emails.
- SMS.
- WhatsApp.
- Image processing.
- Invoice generation.
- Analytics aggregation.
- Abandoned carts.
- Subscription reminders.
- Scheduled reports.
- Expired stock reservations.

Do not block ordinary user requests with unnecessary long-running operations.

---

85. SUPPORT SYSTEM

Support tickets should include:

id
tenantId
userId
subject
description
status
priority
assignedTo
createdAt
updatedAt

Statuses:

OPEN
IN_PROGRESS
WAITING
RESOLVED
CLOSED

---

86. AUDIT LOGS

Create:

AuditLog

Fields:

id
tenantId
userId
action
entityType
entityId
before
after
ipAddress
userAgent
createdAt

Audit important actions:

- Product price changes.
- Inventory changes.
- Refunds.
- Order cancellation.
- Staff creation.
- Staff removal.
- Permission changes.
- Subscription cancellation.
- Store suspension.
- Tenant suspension.
- Administrative actions.
- Domain changes.
- Critical payment actions.

---

87. PLATFORM SETTINGS

Create platform settings for non-secret configuration.

id
key
value
description
updatedAt
updatedBy

Never store secrets in ordinary settings.

Secrets belong in environment variables or a proper secret-management system.

---

88. DATABASE INDEXING

Create appropriate indexes for common queries.

At minimum consider:

Tenant.slug

Store.tenantId
Store.slug
Store.tenantId + slug

StoreMember.tenantId
StoreMember.userId
StoreMember.tenantId + userId

Product.tenantId
Product.storeId
Product.slug
Product.storeId + slug
Product.categoryId
Product.status

ProductVariant.productId
ProductVariant.sku

Category.storeId
Category.parentId
Category.slug

InventoryItem.storeId
InventoryItem.productId
InventoryItem.variantId

Warehouse.storeId

Order.tenantId
Order.storeId
Order.customerId
Order.orderNumber
Order.status
Order.createdAt

Payment.orderId
Payment.providerPaymentId
Payment.status

Subscription.tenantId
Subscription.status

Invoice.tenantId
Invoice.status

Notification.userId
Notification.status

AuditLog.tenantId
AuditLog.entityType
AuditLog.entityId
AuditLog.createdAt

CustomDomain.domain

Do not create excessive indexes without justification.

---

89. UNIQUE CONSTRAINTS

Implement appropriate uniqueness for:

Tenant.slug

Store.tenantId + Store.slug

StoreMember.tenantId + StoreMember.userId

Product.storeId + Product.slug

ProductVariant.sku

Category.storeId + Category.slug

Brand.storeId + Brand.slug

Wishlist.customerId + Wishlist.storeId

WishlistItem.wishlistId + WishlistItem.productId

StoreFollower.storeId + StoreFollower.customerId

CustomDomain.domain

Adjust where business requirements require it.

---

90. DATABASE DELETE POLICY

Use cascading deletion carefully.

It may be appropriate for:

Product → ProductImage
Product → ProductVariant
Product → ProductOption
ProductOption → ProductOptionValue
Cart → CartItem
Wishlist → WishlistItem
Page → StoreSection

Do not casually cascade-delete:

Tenant → Orders
Tenant → Payments
Tenant → Invoices
Tenant → AuditLogs

Preserve financial and audit history.

---

91. SOFT DELETION

Important business records should generally be archived/soft-deleted.

Examples:

- Products.
- Customers.
- Users.
- Stores.
- Tenants.

Do not destroy historical financial records merely because a merchant deletes an item.

---

92. DATABASE TRANSACTIONS

Use Prisma transactions for operations requiring atomicity.

Examples:

Checkout

Validate cart
→ Validate inventory
→ Reserve stock
→ Create order
→ Create order items
→ Create payment

Refund

Validate payment
→ Create refund
→ Update payment
→ Update order
→ Restore inventory where appropriate
→ Audit

Subscription Payment

Verify payment
→ Update transaction
→ Mark invoice paid
→ Update subscription
→ Audit

---

93. SOURCE OF TRUTH

Define one authoritative source for each piece of business information.

Examples:

Product price
→ Product / ProductVariant

Current stock
→ Inventory system

Historical order price
→ Order snapshot

Payment status
→ Payment system

Subscription status
→ Subscription

Merchant entitlement
→ Subscription + entitlement service

Store configuration
→ StoreTheme / StorePage / StoreSection

Avoid conflicting sources of truth.

---

94. API ARCHITECTURE

Use Next.js Route Handlers/API routes.

API groups:

/api/auth
/api/stores
/api/products
/api/categories
/api/inventory
/api/customers
/api/cart
/api/orders
/api/payments
/api/subscriptions
/api/billing
/api/delivery
/api/reviews
/api/notifications
/api/analytics
/api/admin

---

95. SERVICE LAYER

Create reusable business services such as:

AuthService
TenantService
StoreService
ProductService
InventoryService
CustomerService
CartService
OrderService
PaymentService
BillingService
SubscriptionService
DeliveryService
ReviewService
NotificationService
AnalyticsService
MarketplaceService

Route handlers should remain thin.

Business logic should primarily reside in service/domain layers.

---

96. API VALIDATION

Use Zod or equivalent.

Validate:

- Request body.
- Query parameters.
- Route parameters.
- Forms.
- Webhooks.
- Payment payloads.
- Billing payloads.
- File metadata.
- Domain configuration.

Never rely only on TypeScript for runtime validation.

---

97. API RESPONSE STANDARD

Success:

{
  success: true,
  data: ...
}

Failure:

{
  success: false,
  error: {
    code: "...",
    message: "...",
    details: ...
  }
}

Do not expose stack traces or sensitive implementation details.

---

98. APPLICATION ERROR CODES

Use meaningful application codes such as:

UNAUTHORIZED
FORBIDDEN
TENANT_NOT_FOUND
STORE_NOT_FOUND
PRODUCT_NOT_FOUND
INSUFFICIENT_STOCK
INVALID_PRODUCT
INVALID_CART
ORDER_NOT_FOUND
PAYMENT_FAILED
PAYMENT_ALREADY_PROCESSED
INVALID_WEBHOOK
SUBSCRIPTION_REQUIRED
PLAN_LIMIT_REACHED
VALIDATION_ERROR
RATE_LIMITED
RESOURCE_CONFLICT
INTERNAL_ERROR

---

99. FILE STORAGE

Images and large files must be stored outside PostgreSQL.

Use a storage provider.

Database stores:

url
storageKey
width
height
mimeType
altText

Support:

- Optimization.
- Responsive images.
- Lazy loading.
- CDN.
- Compression.
- Alt text.

---

100. CODE ORGANIZATION

Recommended structure:

src/
  app/
  components/
  features/
  lib/
  server/
  hooks/
  types/
  config/

prisma/
  schema.prisma
  migrations/
  seed/

tests/
  unit/
  integration/
  e2e/
  security/

Organize feature-specific code into modules.

---

101. TYPESCRIPT STANDARDS

Mandatory:

- Strict TypeScript.
- ".ts" and ".tsx".
- Explicit types where appropriate.
- Avoid "any".
- Avoid "@ts-ignore".
- Do not suppress compiler errors as shortcuts.
- Type API responses.
- Type service functions.
- Validate external data.

---

102. COMPONENT ARCHITECTURE

Create reusable components such as:

Button
Input
Select
Modal
Dialog
DataTable
Pagination
ProductCard
ProductGallery
PriceDisplay
CartItem
OrderStatusBadge
DashboardCard
Chart
EmptyState
LoadingState
ErrorState

Avoid duplicate components with identical responsibilities.

---

103. STATE MANAGEMENT

Use the simplest appropriate state-management architecture.

Separate:

Server state
Form state
UI state
Authentication state
Cart state

Do not introduce unnecessary global state.

---

104. FORMS

Forms must:

- Validate client-side.
- Validate server-side.
- Show field errors.
- Show loading state.
- Prevent duplicate submission.
- Handle network errors.
- Preserve user input where appropriate.
- Be accessible.

---

105. UI/UX PRINCIPLES

The UI should be:

- Modern.
- Professional.
- Furniture-focused.
- Responsive.
- Consistent.
- Accessible.
- Intuitive.

Do not sacrifice usability for visual effects.

---

106. PUBLIC PLATFORM ROUTES

Conceptual routes:

/
 /marketplace
 /stores
 /products
 /categories
 /pricing
 /about
 /contact

---

107. MERCHANT STOREFRONT ROUTES

Conceptually:

/store/[slug]
/store/[slug]/products
/store/[slug]/categories
/store/[slug]/product/[slug]
/store/[slug]/about
/store/[slug]/contact

Custom domains should resolve directly to the same storefront engine.

---

108. MERCHANT DASHBOARD ROUTES

/dashboard
/dashboard/products
/dashboard/orders
/dashboard/inventory
/dashboard/customers
/dashboard/analytics
/dashboard/staff
/dashboard/store
/dashboard/delivery
/dashboard/marketing
/dashboard/billing

Additional nested routes may be created where appropriate.

---

109. ADMIN ROUTES

/admin
/admin/tenants
/admin/users
/admin/products
/admin/orders
/admin/payments
/admin/subscriptions
/admin/revenue
/admin/reports
/admin/content
/admin/settings

---

110. UI STATES

Every major interface must handle:

Loading
Empty
Success
Error
Unauthorized
Forbidden
Not Found
Network failure where appropriate

Never leave users with unexplained blank screens.

---

111. RESPONSIVE DESIGN

Support:

Mobile
Tablet
Laptop
Desktop
Large desktop

Do not simply shrink desktop interfaces.

Dashboard tables and controls must remain usable on small screens.

---

112. ACCESSIBILITY

Support:

- Keyboard navigation.
- Visible focus.
- Semantic HTML.
- Labels.
- Accessible forms.
- Accessible dialogs.
- Screen-reader compatibility.
- Appropriate contrast.
- Error announcements.
- Meaningful button labels.

Do not use color as the only indication of status.

---

113. SEO

Public pages should support:

- Dynamic metadata.
- Meta descriptions.
- Canonical URLs.
- Open Graph.
- Social metadata.
- Sitemap.
- Robots.
- Structured data.
- Product schema.
- Store/business schema.
- Breadcrumb schema.

Private dashboard/admin pages must not be indexed.

---

114. PERFORMANCE

Optimize:

- Server rendering where appropriate.
- Caching.
- Database indexes.
- Pagination.
- Lazy loading.
- Image optimization.
- Query efficiency.
- Code splitting.
- Appropriate memoization.

Avoid premature over-engineering.

---

115. CACHING SECURITY

Tenant-specific data must never be cached in a way that allows another tenant to receive it.

Be especially careful with:

- Store pages.
- Product pages.
- Dashboard data.
- Customer data.
- Orders.
- Analytics.

Public data and private tenant data must be handled differently.

---

116. SEARCH

MVP:

Use PostgreSQL search/indexing.

Search:

Product name
SKU
Description
Category
Brand
Tags

Filters:

Category
Price
Brand
Material
Color
Availability

Support:

- Sorting.
- Pagination.

Future options:

- Elasticsearch/OpenSearch.
- Semantic search.
- AI search.
- Vector embeddings.

Do not make the MVP unnecessarily dependent on external search infrastructure.

---

117. SECURITY REQUIREMENTS

Mandatory protections:

- Authentication.
- Authorization.
- Tenant isolation.
- RBAC.
- Input validation.
- Output sanitization.
- Rate limiting.
- Secure cookies.
- CSRF protection where applicable.
- Secure headers.
- File validation.
- Webhook verification.
- IDOR protection.
- Privilege escalation protection.
- Injection protection.
- Session security.
- Secret management.

---

118. SECURITY ANTI-PATTERNS

Never:

Trust tenantId from frontend
Trust storeId from frontend
Trust frontend price
Trust frontend inventory
Trust frontend payment status
Trust frontend role
Expose secret keys
Return password hashes
Use React-only authorization
Execute unsanitized HTML
Allow arbitrary database queries

---

119. PRIVACY

Handle customer data appropriately.

Support mechanisms for:

- Account management.
- Data export where applicable.
- Deletion/anonymization where appropriate.
- Consent management where necessary.
- Privacy policy.
- Terms of service.

Do not log sensitive payment credentials.

---

120. SECRET MANAGEMENT

Secrets must never be committed to source control.

Use environment variables or a secret manager.

Provide:

.env.example

without real secrets.

Possible variables:

DATABASE_URL
AUTH_SECRET
AUTH_URL
NEXT_PUBLIC_APP_URL

PAYMENT_SECRET
PAYMENT_WEBHOOK_SECRET

STORAGE credentials
EMAIL credentials
SMS credentials
WHATSAPP credentials

---

121. DEVELOPMENT ENVIRONMENTS

Maintain:

Local
 ↓
Staging / Preview
 ↓
Production

Separate appropriate:

- Databases.
- Secrets.
- Payment credentials.
- Storage.
- Authentication.
- Messaging.
- Domains.

Do not use production credentials for normal development.

---

122. TESTING STRATEGY

Use:

Unit Tests
Integration Tests
End-to-End Tests
Security Tests
Regression Tests

---

123. UNIT TESTING

Test:

- Pricing.
- Discounts.
- Tax.
- Delivery.
- Permissions.
- Entitlements.
- Product validation.
- Inventory.
- Order transitions.
- Subscription logic.

---

124. INTEGRATION TESTING

Test:

- Authentication.
- Database.
- Tenant resolution.
- RBAC.
- Products.
- Inventory.
- Cart.
- Checkout.
- Orders.
- Payments.
- Billing.
- Webhooks.

---

125. PLAYWRIGHT TESTING

Critical merchant flow:

Register
→ Login
→ Create business
→ Create store
→ Configure store
→ Create category
→ Create product
→ Add inventory
→ View storefront

Critical customer flow:

Marketplace
→ Store
→ Product
→ Customize
→ Cart
→ Checkout
→ Payment
→ Order

Order management:

Receive order
→ Confirm
→ Process
→ Prepare
→ Deliver
→ Complete

Billing:

Select plan
→ Subscribe
→ Payment
→ Subscription active
→ Invoice
→ Upgrade/downgrade
→ Cancel

---

126. CROSS-TENANT SECURITY TESTING

Create at least:

Tenant A
Tenant B

Verify Tenant A cannot access Tenant B's:

- Products.
- Inventory.
- Customers.
- Orders.
- Analytics.
- Staff.
- Billing.
- Store configuration.

Test:

Frontend
API
Direct URL manipulation
Request body manipulation
Query manipulation

---

127. PAYMENT SECURITY TESTING

Test:

- Invalid webhook.
- Duplicate webhook.
- Replay webhook.
- Wrong amount.
- Wrong order.
- Wrong merchant.
- Already-paid order.
- Failed payment.
- Partial refund.
- Duplicate refund.

---

128. SUBSCRIPTION SECURITY TESTING

Test:

- Unauthorized plan change.
- Fake successful billing request.
- Duplicate billing webhook.
- Expired subscription.
- Cancelled subscription.
- Grace period.
- Plan limit bypass.
- Feature entitlement bypass.

---

129. DATABASE TESTING

Verify:

- Relationships.
- Migrations.
- Constraints.
- Tenant isolation.
- Inventory concurrency.
- Historical order snapshots.
- Financial integrity.
- Soft deletion.
- Seed data.

---

130. CI/CD

Recommended:

Git push
 ↓
Install dependencies
 ↓
Lint
 ↓
Typecheck
 ↓
Unit tests
 ↓
Integration tests
 ↓
Build
 ↓
E2E
 ↓
Security checks
 ↓
Deploy staging
 ↓
Smoke test
 ↓
Production deployment

Do not deploy to production when critical validation fails.

---

131. SMOKE TESTING

After deployment verify:

Public

- Homepage.
- Marketplace.
- Storefront.
- Product pages.
- Search.

Authentication

- Registration.
- Login.
- Logout.
- Session.

Merchant

- Dashboard.
- Products.
- Inventory.
- Orders.

Customer

- Cart.
- Checkout.
- Order.

Admin

- Admin login.
- Tenant management.

Infrastructure

- Database.
- Storage.
- Payments.
- Notifications.

---

132. OBSERVABILITY

Monitor:

- Application errors.
- API failures.
- Database errors.
- Slow requests.
- Payment failures.
- Webhook failures.
- Background jobs.
- Authentication failures.
- Security events.

---

133. LOGGING

Use structured logs where appropriate.

Useful information:

timestamp
requestId
userId where appropriate
tenantId where appropriate
action
result
error code

Never log:

- Passwords.
- API secrets.
- Payment credentials.
- Sensitive tokens.

---

134. BACKUP AND RECOVERY

Production database must have:

- Automated backups.
- Point-in-time recovery where available.
- Documented restoration procedure.
- Recovery testing.
- Backup failure monitoring.

The application is not production-ready without a recovery strategy.

---

135. FEATURE FLAGS

Future functionality should be protected using feature flags.

Examples:

AI_SEARCH
AI_RECOMMENDATIONS
ROOM_PLANNER
AR
WHOLESALE
CUSTOM_DOMAINS
ADVANCED_ANALYTICS

Do not expose unfinished features as completed production features.

---

136. ADVANCED FURNITURE FEATURES

Architecture should support future:

- Furniture customization.
- Custom measurements.
- Materials.
- Fabrics.
- Wood types.
- Finishes.
- Made-to-order products.
- Custom quotes.
- Product bundles.
- Room planner.
- 3D visualization.
- AR preview.

---

137. AI FEATURES

Future AI functionality may include:

- AI product search.
- AI recommendations.
- Natural-language furniture search.
- Furniture style recommendations.
- Room recommendations.
- AI customer support.
- Product description generation.

AI must never bypass:

- Authorization.
- Pricing.
- Inventory.
- Payments.
- Tenant isolation.

---

138. WHOLESALE

Future wholesale support may include:

- Wholesale customers.
- Tiered pricing.
- Minimum order quantities.
- Bulk ordering.
- Purchase orders.
- Quotes.
- Wholesale invoices.

Keep wholesale business rules separate from standard retail logic where appropriate.

---

139. FUTURE DATABASE EXTENSIONS

Potential future models:

Quote
WholesaleCustomer
PurchaseOrder
Supplier
SupplierProduct
ProductBundle
GiftCard
Coupon
Promotion
LoyaltyProgram
LoyaltyTransaction
Affiliate
Referral
RoomPlannerProject
ARSession
AIRecommendation
ProductEmbedding
ChatConversation
SupportMessage

Do not create unused complexity merely for theoretical future functionality.

---

140. IMPLEMENTATION PHASES

The agent must implement the project in dependency-aware phases.

Phase 0 — Project Audit & Foundation

Audit:

- Repository.
- Architecture.
- Database.
- Authentication.
- API.
- UI.
- Dependencies.
- Testing.
- Deployment.
- Security.

Create an implementation gap analysis.

---

Phase 1 — Core Infrastructure

Establish:

- TypeScript configuration.
- Next.js architecture.
- Environment validation.
- Database connection.
- Prisma.
- Base application structure.
- Error handling.
- Logging foundation.
- Testing foundation.

---

Phase 2 — Authentication & Users

Implement:

- Auth.js.
- User model.
- Sessions.
- Registration.
- Login.
- Logout.
- Verification.
- Password management.
- Protected routes.

---

Phase 3 — Multi-Tenancy

Implement:

- Tenant.
- Store.
- Membership.
- Roles.
- Permissions.
- Tenant resolution.
- Tenant middleware.
- Cross-tenant protection.

---

Phase 4 — Merchant Onboarding

Implement:

Registration
→ Business creation
→ Store creation
→ Initial setup
→ 6-months Free Trial/subscription
→ Dashboard

---

Phase 5 — Storefront Engine

Implement:

- Store themes.
- Store pages.
- Store sections.
- Dynamic storefront.
- Responsive design.
- Store navigation.
- Public store routes.

---

Phase 6 — Catalog

Implement:

- Products.
- Categories.
- Brands.
- Tags.
- Variants.
- Images.
- Videos.
- Product options.
- Furniture attributes.

---

Phase 7 — Inventory

Implement:

- Inventory.
- Warehouses.
- Stock movements.
- Reservations.
- Low-stock logic.
- Concurrency protection.

---

Phase 8 — Customer Commerce

Implement:

- Customer accounts.
- Addresses.
- Cart.
- Wishlist.
- Product browsing.
- Search.
- Filtering.

---

Phase 9 — Orders & Checkout

Implement:

- Checkout.
- Pricing.
- Discounts.
- Taxes.
- Delivery calculation.
- Order creation.
- Order status.

---

Phase 10 — Payments

Implement:

- Payment abstraction.
- Payment providers.
- Payment transactions.
- Webhooks.
- Refunds.
- Idempotency.

---

Phase 11 — SaaS Billing

Implement:

- Plans.
- Subscriptions.
- Invoices.
- Billing transactions.
- Entitlements.
- Upgrade/downgrade.
- Cancellation.
- Grace periods.

---

Phase 12 — Delivery

Implement:

- Delivery zones.
- Delivery methods.
- Drivers.
- Tracking.
- Delivery statuses.

---

Phase 13 — Marketplace

Implement:

- Store discovery.
- Product discovery.
- Featured stores.
- Featured products.
- Ratings.
- Search/filtering.

---

Phase 14 — Merchant Operations

Implement:

- Staff.
- Analytics.
- Customer management.
- Reviews.
- Marketing.
- Store management.

---

Phase 15 — Communication

Implement:

- Email.
- SMS.
- WhatsApp.
- In-app notifications.
- Background jobs.

---

Phase 16 — Custom Domains

Implement:

- Domain registration.
- DNS verification.
- Domain mapping.
- SSL integration.
- Store resolution.

---

Phase 17 — Administration & BI

Implement:

- Admin dashboard.
- Tenant management.
- User management.
- Payment monitoring.
- Billing.
- Revenue.
- Marketplace management.
- Reports.
- Audit logs.

---

Phase 18 — Advanced Furniture Features

Commercial Expansion Modules (Post-MVP)

## Commercial Expansion Strategy

To maintain a realistic launch timeline, FurniStack shall separate MVP functionality from advanced commercial expansion modules.

### MVP (Launch Version)

The following features remain part of the launch scope:

- Multi-Tenant SaaS Platform
- Merchant Onboarding
- Storefront Builder
- Product Catalog
- Categories & Brands
- Inventory Management
- Warehouses
- Customer Management
- Orders
- Customer Payments
- Delivery Management
- Reviews
- Marketplace
- Staff Management
- Analytics
- Subscription Billing
- Custom Domains
- Notifications

These features are considered the minimum production-ready commercial release.

---

Phase 18A — RFQ & Custom Furniture System

Purpose:

Support furniture businesses that primarily sell through quotations instead of instant checkout.

### Request For Quotation (RFQ)

Customers must be able to:

- Request a quotation.
- Submit product inquiries.
- Submit room requirements.
- Submit custom furniture requirements.
- Attach reference images.
- Receive quotations.
- Accept quotations.
- Reject quotations.

### RFQ Model

Fields:

- id
- tenantId
- storeId
- customerId
- rfqNumber
- status
- notes
- createdAt
- updatedAt

Statuses:

- DRAFT
- SUBMITTED
- REVIEWING
- QUOTED
- ACCEPTED
- REJECTED
- EXPIRED
- CANCELLED

### Quote Model

Fields:

- id
- rfqId
- amount
- currency
- notes
- expiresAt
- createdAt

### Custom Furniture Orders

Support:

- Custom dimensions
- Custom materials
- Custom fabrics
- Custom colors
- Special instructions
- Manufacturing lead times

---

Phase 18B — Wholesale & B2B Commerce

Purpose:

Allow manufacturers, importers, wholesalers and distributors to operate on FurniStack.

### Wholesale Accounts

Support:

- Retail customers
- Wholesale customers
- Corporate customers
- Interior designers
- Contractors
- Hotels
- Schools
- Offices

### Wholesale Pricing

Support:

- Customer-specific pricing
- Tier pricing
- Volume discounts
- Minimum order quantities
- Negotiated pricing

### B2B Orders

Support:

- Bulk orders
- Purchase orders
- Quote approval workflow
- Net payment terms
- Account managers

---

Phase 18C — 3D Furniture Experience

### 3D Product Viewer

Support:

- GLB/GLTF uploads
- 360° product viewing
- Zoom
- Rotation
- Lighting controls

### Furniture Configurator

Customers should be able to:

- Change colors
- Change materials
- Change finishes
- Preview configurations before purchase

### Room Planner

Support:

- Living room planning
- Bedroom planning
- Office planning
- Furniture drag-and-drop placement
- Dimension validation
- Save room layouts

---

Phase 18D — Augmented Reality (AR)

Purpose:

Allow customers to visualize furniture inside real spaces.

Support:

- Android Scene Viewer
- iOS Quick Look
- WebXR where supported

Capabilities:

- Place furniture in room
- Scale validation
- Position validation
- Save AR previews

Feature Flag:

AR_FEATURE_ENABLED=false by default

---

Phase 19 — AI Features

All AI features must remain feature-flagged and must never bypass:

- Authentication
- Authorization
- Tenant Isolation
- Pricing Rules
- Inventory Rules
- Payment Rules

### AI Search

Examples:

- "Brown sofa under KSh 80,000"
- "6-seater dining table"
- "Modern office desk"

### AI Recommendations

Support:

- Related products
- Style matching
- Room recommendations
- Cross-sell recommendations

### AI Room Styling

Customer uploads room image.

System can suggest:

- Furniture
- Layouts
- Styles
- Color combinations

### AI Sales Assistant

Support:

- Product questions
- Delivery questions
- Store information
- Availability checks

### AI Content Generation

Support:

- Product descriptions
- Product tags
- SEO metadata
- Marketing copy

Feature Flag:

AI_FEATURES_ENABLED=false by default

---

## Commercial Priority Order

After MVP launch, development priority should be:

1. RFQ & Quotation System
2. Custom Furniture Orders
3. Wholesale Pricing & B2B Accounts
4. 3D Product Viewer
5. Furniture Configurator
6. Room Planner
7. AR Visualization
8. AI Features

This order prioritizes revenue-generating business functionality before advanced visualization and AI capabilities.

---

Phase 20 — Production Hardening

Perform:

- Security audit.
- Database audit.
- API audit.
- UI audit.
- Performance audit.
- Accessibility audit.
- SEO audit.
- E2E audit.
- Cross-tenant audit.
- Payment audit.
- Billing audit.

---

Phase 21 — Production Release

Verify:

- Production environment.
- Database.
- Secrets.
- Domains.
- SSL.
- Storage.
- Payments.
- Notifications.
- Monitoring.
- Backups.
- CI/CD.
- Smoke tests.

---

141. PHASE COMPLETION STANDARD

A phase is NOT complete simply because code has been written.

For every phase:

Implement
 ↓
Typecheck
 ↓
Lint
 ↓
Unit tests
 ↓
Integration tests
 ↓
E2E tests where applicable
 ↓
Security review
 ↓
UI review
 ↓
Inspect affected functionality
 ↓
Fix problems
 ↓
Regression test
 ↓
Record progress
 ↓
Continue

---

142. PROJECT AUDIT REQUIREMENT

Before implementation, the agent must inspect the entire existing repository.

Inspect at minimum:

package.json
tsconfig.json
next.config.*
middleware
src/
app/
components/
lib/
server/
prisma/
migrations
authentication
API routes
environment configuration
tests
deployment configuration

Identify:

Existing functionality
Missing functionality
Partially implemented functionality
Broken functionality
Architectural conflicts
Security vulnerabilities
Technical debt
Duplicate code
Database problems
Testing gaps
Deployment problems

---

143. IMPLEMENTATION GAP ANALYSIS

Create and maintain a progress record mapping:

Requirement
Current status
Required implementation
Files/components affected
Database impact
API impact
Security impact
Testing requirements
Completion status

Statuses:

NOT_STARTED
IN_PROGRESS
IMPLEMENTED
TESTING
VERIFIED
BLOCKED

---

144. NO RANDOM CODING

Do not immediately start creating UI components before understanding:

- Architecture.
- Database.
- Authentication.
- Multi-tenancy.
- API.
- Existing UI.
- Deployment.

Implement in dependency order.

---

145. NO FAKE FUNCTIONALITY

Never use fake production functionality.

Do not create fake:

- Payments.
- Inventory.
- Orders.
- Billing.
- Authentication.
- Analytics.
- API responses.
- Merchant data.
- Customer data.

Mocks are acceptable inside tests or isolated development tooling.

---

146. NO PLACEHOLDER COMPLETION

A feature is not complete merely because:

- A button exists.
- A page exists.
- A form exists.
- A database table exists.

Example:

A product creation feature requires:

UI
+
Form
+
Validation
+
API
+
Authorization
+
Database
+
Error handling
+
Success handling
+
Inventory relationship
+
Tests

---

147. PRESERVE EXISTING FUNCTIONALITY

Before replacing existing functionality:

1. Understand it.
2. Identify dependencies.
3. Determine intended behavior.
4. Refactor safely.
5. Update tests.
6. Verify regression.

Do not delete functioning features simply because a rewrite is easier.

---

148. DATABASE-FIRST IMPLEMENTATION

For major business functionality:

Database model
 ↓
Service/business logic
 ↓
API
 ↓
Frontend
 ↓
Tests

Do not build complex UI around undefined backend behavior.

---

149. SERVICE-FIRST IMPLEMENTATION

Critical business rules must be centralized.

Do not put important business logic inside React components.

Do not duplicate:

- Pricing.
- Authorization.
- Inventory.
- Subscription.
- Payment logic.

---

150. SECURITY-FIRST IMPLEMENTATION

Every feature must answer:

Who can access it?
Which tenant owns it?
Which role can use it?
What if the request is manipulated?
What if IDs are changed?
What if the request is repeated?

Security is part of every feature.

---

151. IDEMPOTENCY

Operations vulnerable to duplicate requests must be idempotent.

Especially:

- Payment webhooks.
- Billing webhooks.
- Refunds.
- Order creation.
- Subscription events.

Repeated requests must not duplicate financial/business records.

---

152. BROWSER VERIFICATION

Use Playwright where possible to verify actual browser behavior.

Verify:

- Navigation.
- Buttons.
- Forms.
- Dropdowns.
- Modals.
- Search.
- Filters.
- Cart.
- Checkout.
- Authentication.
- Dashboard.
- Store builder.
- Responsive layouts.

Do not assume compilation means functionality works.

---

153. RESPONSIVE VERIFICATION

Test representative:

Mobile
Tablet
Laptop
Desktop

Pay special attention to:

- Tables.
- Product cards.
- Navigation.
- Sidebar.
- Checkout.
- Product customization.
- Store builder.
- Modals.
- Forms.

---

154. GIT DISCIPLINE

Use meaningful commits where appropriate.

Examples:

feat: implement tenant isolation
feat: implement product management
feat: implement inventory reservations
feat: implement checkout
fix: prevent cross-tenant product access
test: add payment webhook idempotency tests

Never commit secrets.

---

155. DOCUMENTATION

Maintain accurate project documentation covering:

- Architecture.
- Environment variables.
- Database setup.
- Authentication.
- Payment providers.
- Billing.
- Deployment.
- Testing.
- Tenant architecture.
- Custom domains.
- Background jobs.

Documentation must describe the actual implementation.

---

156. AGENT STOPPING RULE

Do NOT stop after completing one phase and ask:

«"What should I do next?"»

Continue to the next phase automatically.

Stop only when:

1. The entire implementation is complete.
2. A genuinely blocking external dependency requires human action.
3. A destructive or irreversible decision requires explicit approval.
4. Required credentials/API keys are genuinely unavailable.
5. The final production-readiness gate has been reached.

Do not stop because:

- A phase ended.
- Tests failed.
- TypeScript errors exist.
- Build errors exist.
- A normal implementation problem occurred.

Those are problems to solve.

---

157. WHEN BLOCKED

If blocked:

1. Investigate the root cause.
2. Inspect existing code/configuration.
3. Inspect relevant documentation.
4. Try reasonable implementation alternatives.
5. Fix the issue if possible.
6. Only request human intervention when genuinely necessary.

Do not repeatedly ask for permission to continue ordinary implementation work.

---

158. CONTINUOUS VERIFICATION

After every meaningful implementation:

Run typecheck
Run lint
Run relevant tests
Run affected E2E tests
Inspect failures
Fix failures
Run regression tests
Continue

Do not accumulate large amounts of unverified code.

---

159. FINAL SECURITY AUDIT

Before completion verify:

Authentication bypass
Authorization bypass
Tenant escape
IDOR
Privilege escalation
Session vulnerabilities
Webhook manipulation
Payment manipulation
Billing manipulation
Inventory race conditions
Injection
XSS
Unsafe uploads
CSRF where applicable
Rate-limit bypass
Secret exposure
Sensitive-data exposure

Fix all critical and high-severity findings.

---

160. FINAL DATABASE AUDIT

Verify:

- Schema consistency.
- Migrations.
- Indexes.
- Constraints.
- Relationships.
- Tenant ownership.
- Transactions.
- Historical snapshots.
- Financial integrity.
- Inventory integrity.
- Backup strategy.

---

161. FINAL API AUDIT

Every endpoint must have appropriate:

Authentication
Authorization
Tenant validation
Input validation
Error handling
Consistent responses
Logging where appropriate
Rate limiting where appropriate
Tests

---

162. FINAL UI AUDIT

Verify:

- Responsive design.
- Accessibility.
- Loading states.
- Empty states.
- Error states.
- Success states.
- Form validation.
- Navigation.
- No dead buttons.
- No broken links.
- No placeholder functionality.
- No debug UI.
- No unexpected console errors.
- No hydration errors.

---

163. FINAL BUSINESS FLOW AUDIT

Merchant onboarding

Registration
→ Verification
→ Business creation
→ Store creation
→ Subscription/trial
→ Dashboard

Store setup

Theme
→ Pages
→ Categories
→ Products
→ Inventory
→ Storefront

Customer purchase

Marketplace
→ Store
→ Product
→ Customization
→ Cart
→ Checkout
→ Payment
→ Order
→ Delivery
→ Completion
→ Review

SaaS billing

Plan
→ Subscription
→ Billing
→ Invoice
→ Payment
→ Entitlements
→ Renewal

Administration

Admin
→ Merchant
→ Store
→ Orders
→ Payments
→ Subscription
→ Analytics
→ Audit

---

164. FINAL PRODUCTION-READINESS GATE

Do NOT declare the project production-ready until:

Application

- Build succeeds.
- Typecheck succeeds.
- Lint succeeds.
- No critical runtime errors.

Database

- Prisma schema works.
- Migrations work.
- Constraints work.
- Indexes are appropriate.
- Tenant isolation works.
- Historical records are preserved.

Authentication

- Registration works.
- Login works.
- Logout works.
- Sessions work.
- Protected routes work.

Authorization

- RBAC works.
- Tenant isolation works.
- Admin separation works.
- IDOR protections work.

Commerce

- Products work.
- Variants work.
- Customization works.
- Inventory works.
- Cart works.
- Checkout works.
- Orders work.

Payments

- Payment integration works.
- Webhooks work.
- Idempotency works.
- Refunds work.

SaaS Billing

- Plans work.
- Subscriptions work.
- Invoices work.
- Billing payments work.
- Entitlements work.
- Failed payments work.
- Cancellation works.

Delivery

- Delivery calculation works.
- Delivery tracking works.
- Status transitions work.

Marketplace

- Store discovery works.
- Product discovery works.
- Search works.
- Filters work.
- Featured content works.

UI

- Responsive.
- Accessible.
- Loading states.
- Empty states.
- Error states.
- Success states.

SEO

- Metadata.
- Sitemap.
- Robots.
- Structured data.
- Canonical URLs.

Testing

- Unit tests.
- Integration tests.
- E2E tests.
- Security tests.
- Regression tests.

Infrastructure

- Production environment configured.
- Secrets secure.
- Database accessible.
- Storage works.
- Monitoring works.
- Backups exist.
- Recovery process documented.

---

165. FINAL IMPLEMENTATION REPORT

At the end, create a final implementation report containing:

Project status

Completed features

Partially completed features

Known limitations

Database status

Authentication status

Multi-tenancy status

Authorization status

Payment status

Billing status

Inventory status

Delivery status

Marketplace status

Testing status

Security status

Performance status

SEO status

Accessibility status

Deployment status

Environment requirements

Remaining manual configuration

Known technical debt

Recommended future improvements

Never falsely claim that a feature is complete.

---

166. FINAL AUTONOMOUS AGENT DIRECTIVE

You are responsible for implementing the complete Furniture SaaS Platform defined in this document.

Treat this document as the architectural, functional, technical, security, testing and implementation source of truth.

Your objective is not to produce a visual prototype.

Your objective is to produce a fully functioning production-grade SaaS platform.

The final application must work across:

Frontend
Backend
Database
Authentication
Authorization
Multi-Tenancy
Catalog
Furniture Customization
Inventory
Customers
Cart
Checkout
Orders
Payments
Delivery
Reviews
Marketplace
Notifications
Marketing
SaaS Billing
Subscriptions
Payouts
Analytics
Staff
Store Builder
Custom Domains
Administration
Security
Testing
Monitoring
Deployment

Every feature must be implemented across the necessary layers.

A feature is not considered complete until it works end-to-end.

---

167. PRIORITY ORDER FOR DECISIONS

When making implementation decisions, prioritize:

1. Security
2. Correctness
3. Tenant isolation
4. Data integrity
5. Financial integrity
6. Maintainability
7. Scalability
8. Testability
9. Performance
10. User experience

Do not sacrifice security or data integrity to implement functionality faster.

Do not create unnecessary complexity for theoretical future requirements.

Build the simplest architecture that correctly satisfies this specification.

---

168. FINAL COMMAND TO THE CODING AGENT

START BY AUDITING THE EXISTING PROJECT.

Do not immediately rewrite the application.

Inspect the repository and determine:

What already exists
What works
What partially works
What is broken
What is missing
What conflicts with this specification
What must be migrated
What must be refactored
What security vulnerabilities exist
What testing gaps exist

Create the implementation gap analysis.

Then begin implementation according to the phase structure.

Continue autonomously.

After each meaningful implementation:

Implement
→ Verify
→ Test
→ Fix
→ Regression test
→ Continue

Do not stop after individual phases.

Do not ask what to implement next when the next requirement is already defined in this specification.

Do not create fake functionality.

Do not mark placeholder functionality as complete.

Do not bypass tenant isolation.

Do not trust client-side authorization.

Do not trust client-side pricing.

Do not trust client-side inventory.

Do not trust client-side payment status.

Do not mix SaaS billing with customer commerce payments.

Do not expose secrets.

Do not introduce unnecessary JavaScript.

Do not use "any" unless genuinely unavoidable.

Do not skip testing.

Do not skip security verification.

Do not declare completion until the final production-readiness gate has been satisfied.

The final objective is a secure, scalable, maintainable, tested and production-ready multi-tenant Furniture SaaS Platform and marketplace.

END OF FINAL MASTER CODING AGENT SPECIFICATIONThis is the one I recommend giving the coding agent. You can keep the earlier documents as backup/reference, but the agent should work from this master document so there isn't confusion about which specification takes priority.

One especially important part is Phase 0: don't start rewriting the project immediately. You should first audit the existing codebase and map it against this specification. That will help prevent you from destroying functionality you already have while trying to build the SaaS architecture, Understood.}]