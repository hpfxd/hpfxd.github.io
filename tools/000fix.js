/*
000fix.js
Removes 000webhost branding.

 /----------------\
| https://hpfxd.nl |
 \----------------/
 */
 $(document).ready(function(){$('body').find('img[src$="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"]').remove();});
