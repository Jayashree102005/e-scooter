document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-white text-slate-900 w-full border-t border-gray-100">

  <div class="max-w-7xl mx-auto px-6 py-14">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- Brand and Vision Section -->
      <div>
        <h1 class="text-2xl text-slate-900 font-bold tracking-tight">
          <a href="index.html">
            ECO<span class="title text-[#10B981] font-bold">GLIDE</span>
          </a>
        </h1>
        <p class="text-gray-500 text-sm leading-relaxed mt-2">
          Experience smart, eco-friendly urban mobility. Rent on-demand premium e-scooters or join guided city tours designed to connect you with the city sustainably.
        </p>

        <!-- Social Media Icons (Hover effects set to Electric Emerald) -->
        <div class="flex gap-4 mt-4 text-lg">
          <a href="#" class="hover:text-[#10B981] transition text-gray-400"><i class="bi bi-facebook"></i></a>
          <a href="#" class="hover:text-[#10B981] transition text-gray-400"><i class="bi bi-instagram"></i></a>
          <a href="#" class="hover:text-[#10B981] transition text-gray-400"><i class="bi bi-twitter-x"></i></a>
          <a href="#" class="hover:text-[#10B981] transition text-gray-400"><i class="bi bi-tiktok"></i></a>
        </div>
      </div>

      <!-- Services / What they offer -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-slate-900">
          Our Services
        </h3>
        <ul class="space-y-2 text-gray-500 text-sm">
          <li><a href="#" class="hover:text-[#10B981] transition">Hourly City Rentals</a></li>
          <li><a href="#" class="hover:text-[#10B981] transition">Guided Sightseeing Tours</a></li>
          <li><a href="#" class="hover:text-[#10B981] transition">Commuter Day Passes</a></li>
          <li><a href="#" class="hover:text-[#10B981] transition">Corporate Fleet Solutions</a></li>
        </ul>
      </div>

      <!-- Quick Navigation Links -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-slate-900">
          Quick Links
        </h3>
        <ul class="space-y-2 text-gray-500 text-sm">
          <li><a href="about.html" class="hover:text-[#10B981] transition">About Us</a></li>
          <li><a href="gallery.html" class="hover:text-[#10B981] transition">Tour Gallery</a></li>
          <li><a href="blog.html" class="hover:text-[#10B981] transition">Rider Blog</a></li>
          <li><a href="contact.html" class="hover:text-[#10B981] transition">Contact Support</a></li>
        </ul>
      </div>

      <!-- Dynamic Contact Information -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-slate-900">
          Contact Us
        </h3>

        <ul class="space-y-3 text-gray-500 text-sm">
          <li class="flex items-start gap-2">
            <i class="bi bi-geo-alt-fill text-[#10B981]"></i>
            <span class="text-gray-600">Central Transit Hub, London, UK</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-telephone-fill text-[#10B981]"></i>
            <span class="text-gray-600">+44 20 7946 0888</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-envelope-fill text-[#10B981]"></i>
            <span class="text-gray-600">support@ecoglide.io</span>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <!-- Footer Bottom Copyright Bar -->
  <div class="border-t border-gray-100 py-6 text-center text-gray-400 text-xs px-4">
    © ${new Date().getFullYear()} ECOGLIDE MOBILITY. All Rights Reserved.
  </div>

</footer>
`;
});