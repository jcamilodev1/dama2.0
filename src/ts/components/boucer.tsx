import * as Bouncer from 'formbouncerjs'
const emails = ['temp-mail.org', 'correotemporal.org', 'mohmal.com', 'yopmail.com', 'tempail.com', 'emailondeck.com', 'emailtemporalgratis.com', 'crazymailing.com', 'tempr.email', 'bupmail.com', 'guerrillamail.com', 'temp-mail.io', 'es.emailfake.com', 'nowmymail.com', '10minutemail.net', 'es.getairmail.com', 'mailf5.com', 'flashmail.it', '10minemail.com', 'mailcatch.com', 'temp-mails.com', 'spambox.us', 'mailnull.com', 'incognitomail.com', 'ssl.trashmail.net', 'trashmail.net', 'mailinator.com', 'tempinbox.com', 'filzmail.com', 'dropmail.me', 'spam4.me', 'cs.email', 'one-off.email', 'throwawaymail.com', 'emailtemporal.org', 'maildrop.cc', 'mailforspam.com', 'trashmail.com', 'teleworm.us', 'superrito.com', 'rhyta.com', 'jourrapide.com', 'gustr.com', 'fleckens.hu', 'einrot.com', 'cuvox.de', 'dayrep.com', 'muyoc.com', 'buxod.com', 'pidox.org', 'mecip.net', 'pudxe.com', 'xedmi.com', 'ludxc.com', 'juzab.com', 'klepf.com', 'matra.site', 'bombamail.icu', 'yermail.net', 'totallynotfake.net', 'techblast.ch', 'spamthis.network', 'spammy.host', 'spammer.fail', 'shadap.org', 'pewpewpewpew.pw', 'netcom.ws', 'itcompu.com', 'disposable.site', 'deinbox.com', 'sharklasers.com', 'guerrillamailblock.com', 'guerrillamail.org', 'guerrillamail.net', 'guerrillamail.de', 'guerrillamail.biz', 'grr.la', 'netmail.tk', 'laste.ml', 'firste.ml', 'zeroe.ml', 'supere.ml', 'emlhub.com', 'emlpro.com', 'emltmp.com', 'yomail.info', '10mail.org', 'wegwerfmail.org', 'wegwerfmail.net', 'wegwerfmail.de', 'trashmail.me', 'trashmail.io', 'trashmail.at', 'trash-mail.at', 'rcpt.at', 'proxymail.eu', 'objectmail.com', 'kurzepost.de', 'damnthespam.com', 'contbay.com', '0box.eu', 'marmaryta.space', '5y5u.com', '58as.com', 'firemailbox.club', 'mozej.com', 'mailna.co', 'mailna.in', 'mailna.me', 'mohmal.im', 'mohmal.in', 'yopmail.fr', 'yopmail.net', 'cool.fr.nf', 'jetable.fr.nf', 'nospam.ze.tc', 'nomail.xl.cx', 'mega.zik.dj', 'speed.1s.fr', 'courriel.fr.nf', 'moncourrier.fr.nf', 'monemail.fr.nf', 'monmail.fr.nf', 'nedoz.com', 'nmagazinec.com', 'armyspy.com', 'vmani.com', 'discard.email', 'discardmail.com', 'discardmail.de', 'spambog.com', 'spambog.de', 'spambog.ru', '0btcmail.pw', '815.ru', 'knol-power.nl', 'hartbot.de', 'freundin.ru', 'smashmail.de', 's0ny.net', 'pecinan.net', 'budaya-tionghoa.com', 'lajoska.pe.hu', '1mail.x24hr.com', 'from.onmypc.info', 'now.mefound.com', 'mowgli.jungleheart.com', 'yourspamgoesto.space', 'pecinan.org', 'budayationghoa.com', 'CR.cloudns.asia', 'TLS.cloudns.asia', 'MSFT.cloudns.asia', 'B.cr.cloUdnS.asia', 'ssl.tls.cloudns.ASIA', 'sweetxxx.de', 'DVD.dns-cloud.net', 'DVD.dnsabr.com', 'BD.dns-cloud.net', 'YX.dns-cloud.net', 'SHIT.dns-cloud.net', 'SHIT.dnsabr.com', 'eu.dns-cloud.net', 'eu.dnsabr.com', 'asia.dnsabr.com', '8.dnsabr.com', 'pw.8.dnsabr.com', 'mm.8.dnsabr.com', '23.8.dnsabr.com', 'pecinan.com', 'disposable-email.ml', 'pw.epac.to', 'postheo.de', 'sexy.camdvr.org', 'Disposable.ml', '888.dnS-clouD.NET', 'adult-work.info', 'casinokun.hu', 'bangsat.in', 'wallus.casinokun.hu', 'trap-mail.de', 'umailz.com', 'panchoalts.com', 'gmaile.design', 'ersatzauto.ch', 'tempes.gq', 'cpmail.life', 'tempemail.info', 'coolmailcool.com', 'kittenemail.com', '99email.xyz', 'notmyemail.tech', 'm.cloudns.cl', 'twitter-sign-in.cf', 'anonymized.org', 'you.has.dating', 'ketoblazepro.com', 'kost.party', '0hio0ak.com', '4dentalsolutions.com', 't.woeishyang.com', 'ondemandemail.top', 'kittenemail.xyz', 'blackturtle.xyz', 'y.x.ssl.cloudns.asia', 'geneseeit.com', 'mailg.ml', 'media.motornation.buzz', 'sage.speedfocus.biz', 'badlion.co.uk', 'safeemail.xyz', 'virtual-generations.com', 'new-york.host', 'mrdeeps.ml', 'kitela.work', 'fouadps.cf', 'megacorp.work', 'fake-wegwerf.email', 'tigytech.com', 'historictheology.com', 'ma.567map.xyz', 'hotmailproduct.com', 'maxsize.online', 'happyfreshdrink.com', 'denomla.com', 'pansamantala.poistaa.com', 'sahaltastari.sytes.net', 'cecep.ddnsking.com', 'fadilmalik.ddnsking.com', 'csingi.sytes.net', 'richmail.ga', 'tikmail.gq', 'bupkiss.ml', 'guerrillamail.info', 'pokemail.net', 'myinbox.icu', 'just4fun.me', 'inscriptio.in', 'cloud-mail.top', 'safemail.icu', 'montokop.pw', 'tempamailbox.info', 'blogtron.com', 'atanetorg.org', 'aristockphoto.com', 'jomcs.com', 'kukuka.org', 'gothill.com', 'mixely.com', 'marsoasis.org', 'walmarteshop.com', 'outlandlabs.com', 'comectrix.com', 'buymondo.com', 'eventao.com', 'louieliu.com', 'mymailnow.xyz', 'cuoly.com', 'getnada.com', 'abyssmail.com', 'boximail.com', 'clrmail.com', 'dropjar.com', 'getairmail.com', 'givmail.com', 'inboxbear.com', 'robot-mail.com', 'tafmail.com', 'vomoto.com', 'zetmail.com']

export const formregister = (id: any):void => {
  console.log(id)
  var validateFormBouncer = (Bouncer(id, {
    disableSubmit: true,
    patterns: {
      email: /^[a-z0-9!#$%&'*/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    },
    customValidations: {
      emailVerified: function(field: any) {
        let array_email = field.value.split("@");
        const res = emails.find(m => m === array_email[1]);
        return res === undefined ? false : true;
    },
    phoneVerified: function (field: any){
      console.log(field.name)
      if(field.name == 'phone'){
          const value = field.value
          if(value.length <=7  || value.length > 10 ){
              return true;
          }
      }
    },
    password: function(field:any){
      if (field.name === 'passconfirm[pass2]' ){
        let contraseña = document.getElementById('edit-passconfirm-pass1--2') as any
        if(field.value != contraseña.value){
          return false;
        }
        return true;
      }
    },
    ageVerified: function(field: any) {
      if (field.name === 'day' ) {
          let year = document.getElementById('edit-year') as any
          let month = document.getElementById('edit-month') as any
          let day = document.getElementById('edit-day') as any
          year = year.value;
          month = month.value;
          day = day.value;
          const response = getAge(year, month, day)
          if (response < 18) {
              console.log(response)
              document.getElementById('edit-day').classList.add("error-edad");
              return true;
          }
          return false;
      }
    },
  },
    messages: {
      missingValue: {
        checkbox: 'Debe aceptar Términos y condiciones y Políticas de privacidad',
        default: 'Campo Obligatorio'
      },
      phoneVerified: 'Solo se permiten 7 a 10 digitos',
      ageVerified: 'Debe ser mayor de edad',
      password: 'Contraseñas no coincide',
      emailVerified: 'Por favor ingrese un email válido',
      patternMismatch: {
        email: 'Por favor ingrese un email válido',
      },
    },
  }) as any);
}





function getAge(y: any, m: any, d: any) {
  var today = new Date();
  var birthDate = new Date(`${y}/${m}/${d}`);
  var age = today.getFullYear() - birthDate.getFullYear() as any
  var m = today.getMonth() - birthDate.getMonth() as any
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}