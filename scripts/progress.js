const scriptTag = document.querySelector('script[src="progress.js"]');
const tokenId = scriptTag.getAttribute('tokenId');
const userId  = scriptTag.getAttribute('userId');
const webUrl  = window.location.href

async function VerifyWebSite() {
  try {
    const response = await fetch(`https://progress-application.onrender.com/api/company/test?webUrl=${webUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tokenId, userId })
    })
    const result = await response.json()
    console.log("result", result)
  } catch (error) {
    console.log("error", error)
  }
}

VerifyWebSite()

