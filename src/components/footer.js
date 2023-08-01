
export default function Photos() {

  const iubendaPrivacyDocumentation = `
  <a href="https://www.iubenda.com/privacy-policy/75516337" class="font-semibold" title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>  `

  const iubendaCookieDocumentation = `
  <a href="https://www.iubenda.com/privacy-policy/75516337/cookie-policy" class="font-semibold" title="Cookie Policy ">Cookie Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>  `

  return (
    <section id='footer'>
      <div className="px-3 py-20 mt-20 text-center text-white bg-default-dark-green">
        <h1 className="text-xl font-volkhov text-default-yellow">La Passione della Terra</h1>
        <div className="my-10">
          <p>2023 - Turin, Italy</p>
          <p>P.IVA 12879240013</p>
        </div>
        <div className="grid my-10">
        <div dangerouslySetInnerHTML={{ __html: iubendaPrivacyDocumentation }}></div>
        <div dangerouslySetInnerHTML={{ __html: iubendaCookieDocumentation }}></div>
        </div>
        <div>
          <p>Designed and built By <a href='https://www.vittoriogioda.com' target="_blank" className="italic font-bold underline">Vittorio Gioda</a></p>
        </div>
      </div>
      
    </section>
  )
}
