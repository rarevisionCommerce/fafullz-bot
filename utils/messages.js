// utils/messages.js
const welcome = (name) => `
🎉 Welcome to Fafullz, ${name}!

Your one-stop shop for digital products. Choose an option below to get started:

👤 Profile - View your account details
💰 Deposit - Add funds to your account  
🛍️ Shop - Browse our products
`;

const help = `
🤖 **Fafullz Help**

**Commands:**
/start - Start the bot
/help - Show this help message

**Features:**
• View and manage your profile
• Deposit funds securely
• Browse products with filters
• Search by year, category, etc.
• Purchase products instantly

Need assistance? Contact support!
`;

const authError = `
❌ **Authentication Error**

Unable to connect to your account. Please try again with /start

If the problem persists, contact support.
`;

const apiError = `
⚠️ **Service Temporarily Unavailable**

We're experiencing technical difficulties. Please try again in a few moments.
`;

const profileMessage = (profile) => `
👤 **Your Profile**

**Name:** ${profile.name || 'Not set'}
**Username:** @${profile.username || 'Not set'}
**Balance:** $${profile.balance || '0.00'}
**Total Orders:** ${profile.total_orders || 0}
**Member Since:** ${new Date(profile.created_at).toLocaleDateString()}

💡 *Tip: Keep your balance topped up for instant purchases!*
`;

const depositSuccess = (amount, newBalance) => `
✅ **Deposit Successful!**

**Amount:** $${amount}
**New Balance:** $${newBalance}

Your funds are now available for purchases!
`;

const depositPending = (amount, paymentUrl) => `
⏳ **Deposit Pending**

**Amount:** $${amount}

Please complete your payment using the link below:
${paymentUrl}

Click "✅ Payment Complete" once you've finished the payment.
`;

const productDetail = (product) => `
🛍️ **${product.name}**

**Price:** $${product.price}
**Year:** ${product.year}
**Category:** ${product.category}

**Description:**
${product.description}

${product.in_stock ? '✅ In Stock' : '❌ Out of Stock'}
`;

const purchaseSuccess = (order) => `
🎉 **Purchase Successful!**

**Order ID:** #${order.id}
**Product:** ${order.product_name}
**Amount:** $${order.total}
**New Balance:** $${order.remaining_balance}

Your order is being processed. Check your profile for updates!
`;

const purchaseError = (error) => `
❌ **Purchase Failed**

${error}

Please check your balance and try again.
`;

const noProducts = `
📭 **No Products Found**

No products match your current filters. Try:
• Adjusting your search criteria
• Browsing all products
• Checking different categories
`;

const customDepositPrompt = `
💰 **Custom Deposit Amount**

Please enter the amount you want to deposit (minimum $1):

Example: 75.50
`;

const invalidAmount = `
❌ **Invalid Amount**

Please enter a valid number (minimum $1.00).

Example: 25.50
`;

const insufficientBalance = (required, available) => `
💳 **Insufficient Balance**

**Required:** $${required}
**Available:** $${available}
**Needed:** $${(required - available).toFixed(2)}

Please deposit funds to complete this purchase.
`;

const searchPrompt = `
🔍 **Search Products**

Enter keywords to search for products:

Example: "phone 2023" or "laptop gaming"
`;

module.exports = {
    welcome,
    help,
    authError,
    apiError,
    profileMessage,
    depositSuccess,
    depositPending,
    productDetail,
    purchaseSuccess,
    purchaseError,
    noProducts,
    customDepositPrompt,
    invalidAmount,
    insufficientBalance,
    searchPrompt
};