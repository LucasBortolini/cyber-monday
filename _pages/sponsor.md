---
layout: page
title: Anuncie no Cyber Monday
permalink: /anuncie

---

<section>
  <form data-feedback="Mensagem enviada com sucesso! Agradecemos pelo interesse. Em breve nossa equipe comercial entrará em contato com sua empresa. Obrigado." method="post" action="http://3.212.170.97:3000/advertise/" class="block max-w-xl pb-8">
    <div>
      <label class="block font-light tracking-wide text-gray-800 mb-2" for="grid-first-name">
        Nome:
      </label>
      <input required name="advertisename" id="sponsor-name" type="text" class="appearance-none block w-full text-gray-700 border shadow-inner border-gray-200 rounded-xl py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:shadow-focus" />
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block font-light tracking-wide text-gray-800 mb-2" for="grid-first-name">
          E-mail:
        </label>
        <input name="advertiseemail" type="text" required class="appearance-none block border-gray-200 w-full shadow-inner text-gray-700 border rounded-xl py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:shadow-focus" id="sponsor-email" type="text">
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block font-light tracking-wide text-gray-800 mb-2">
          Empresa:
        </label>
        <input name="advertisecompany" type="text" required class="appearance-none block border-gray-200 w-full shadow-inner text-gray-700 border rounded-xl py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:shadow-focus" id="sponsor-company" type="text">
      </div>
    </div>
    <div>
      <label class="block font-light tracking-wide text-gray-800 mb-2">
        Mensagem:
      </label>
      <textarea name="advertisemessage" type="text" class="appearance-none resize-none block w-full text-gray-700 border border-gray-200 shadow-inner rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 focus:shadow-focus" id="sponsor-message" rows="5" cols="33"></textarea>
    </div>
    <div class="hidden">
      <input type="required" name="advertisesource" value="cybermonday" />
    </div>
    <div class="flex justify-center pt-4">
      <button type="submit" class="py-2 px-12 bg-gradient-to-r from-green-100 to-green-300 text-white rounded-2xl py-2 hover:opacity-80">Enviar</button>
    </div>
  </form>
</section>