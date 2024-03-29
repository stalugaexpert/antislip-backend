/**
 * A set of functions called "actions" for `mail`
 */

const emailTemplateContact = {
  subject: 'Prośba o kontakt od <%= data.name %>',
  text: `Nowa prośba o kontakt`,
  html: `<!DOCTYPE html>

  <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  
  <head>
      <title></title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
      <style>
          * {
              box-sizing: border-box;
          }
  
          body {
              margin: 0;
              padding: 0;
          }
  
          a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
          }
  
          #MessageViewBody a {
              color: inherit;
              text-decoration: none;
          }
  
          p {
              line-height: inherit
          }
  
          .desktop_hide,
          .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
          }
  
          @media (max-width:645px) {
  
              .desktop_hide table.icons-inner,
              .social_block.desktop_hide .social-table {
                  display: inline-block !important;
              }
  
              .icons-inner {
                  text-align: center;
              }
  
              .icons-inner td {
                  margin: 0 auto;
              }
  
              .image_block img.big,
              .row-content {
                  width: 100% !important;
              }
  
              .mobile_hide {
                  display: none;
              }
  
              .stack .column {
                  width: 100%;
                  display: block;
              }
  
              .mobile_hide {
                  min-height: 0;
                  max-height: 0;
                  max-width: 0;
                  overflow: hidden;
                  font-size: 0px;
              }
  
              .desktop_hide,
              .desktop_hide table {
                  display: table !important;
                  max-height: none !important;
              }
          }
      </style>
  </head>
  
  <body style="background-color: #f8f8f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;" width="100%">
          <tbody>
              <tr>
                  <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1aa19c;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1aa19c; color: #000000; width: 625px;" width="625">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                          <tr>
                                                              <td class="pad">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #1AA19C;"><span> </span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 625px;" width="625">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:20px;padding-top:20px;width:100%;padding-right:0px;padding-left:0px;">
                                                                  <div align="center" class="alignment" style="line-height:10px"><img alt="I'm an image" src="https://res.cloudinary.com/dabfgycqz/image/upload/v1668869407/logo_enubes_pl_bec97fb420.png?updated_at=2022-11-19T14:50:04.235Z" style="display: block; height: auto; border: 0; width: 250px; max-width: 100%;" title="I'm an image" width="250" /></div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; color: #000000; width: 625px;" width="625">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                                                      <table border="0" cellpadding="20" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                          <tr>
                                                              <td class="pad">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span> </span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 625px;" width="625">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:12px;padding-top:60px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span> </span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-left:40px;padding-right:40px;width:100%;">
                                                                  <div align="center" class="alignment" style="line-height:10px"><img alt="I'm an image" class="big" src="https://res.cloudinary.com/dabfgycqz/image/upload/v1668869176/info_image_db30e0059e.jpg?updated_at=2022-11-19T14:46:13.132Z" style="display: block; height: auto; border: 0; width: 344px; max-width: 100%;" title="I'm an image" width="344" /></div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-top:50px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span> </span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:30px;padding-left:40px;padding-right:40px;padding-top:10px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div class="" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                          <p style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 19.2px;"><span style="font-size:30px;color:#2b303a;"><strong>Otrzymałeś nową prośbę o kontakt</strong></span></p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3fafa; color: #000000; width: 625px;" width="625">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-left: 30px solid #FFFFFF; border-right: 30px solid #FFFFFF; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-bottom: 0px;" width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                          <tr>
                                                              <td class="pad">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #1AA19C;"><span> </span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-top:35px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span> </span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:15px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div class="" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                          <p style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 19.2px;"><span style="color:#2b303a;font-size:18px;"><strong>Od: <%= data.name %></strong></span></p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:40px;padding-left:30px;padding-right:30px;padding-top:20px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div class="" style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;">
                                                                          <p style="margin: 0; margin-bottom: 18px; font-size: 12px; text-align: left; mso-line-height-alt: 22.5px;"><span style="color:#2b303a;font-size:15px;">Telefon: </span><a style="font-size:15px;" href="tel:<%= data.phone %>" style="margin: 0;"><%= data.phone %></a></p>
                                                                          <p style="margin: 0; font-size: 12px; text-align: left; mso-line-height-alt: 22.5px;"><span style="color:#2b303a;font-size:15px;">Adres e-mail: </span><a style="font-size:15px;" href="mailto:<%= data.email %>" style="margin: 0;"><%= data.email %></a></p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 625px;" width="625">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  
                                                      <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:12px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span> </span></td>
                                                                          </tr>
                                                                      </table>
                                                                      <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                                          <tr>
                                                                              <td class="pad" style="padding-top:20px;padding-right:30px;padding-bottom:10px;padding-left:30px;">
  
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                              </td>
                                                          </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; color: #000000; width: 625px;" width="625">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                                                      <table border="0" cellpadding="20" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                          <tr>
                                                              <td class="pad">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span> </span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #2b303a; color: #000000; width: 625px;" width="625">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                                                      <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                          <tr>
                                                              <td class="pad">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #1AA19C;"><span> </span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                          <tr>
                                                              <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                                                  <div align="center" class="alignment" style="line-height:10px"><img alt="I'm an image" class="big" src="https://res.cloudinary.com/dabfgycqz/image/upload/v1668869407/footer_5bf10090e5.png?updated_at=2022-11-19T14:50:04.077Z" style="display: block; height: auto; border: 0; width: 625px; max-width: 100%;" title="I'm an image" width="625" /></div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="image_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;padding-left:60px;padding-right:60px;padding-top:10px;width:100%;">
                                                                  <div align="center" class="alignment" style="line-height:10px"><a href="https://e-nubes.com/" style="outline:none" tabindex="-1" target="_blank"><img alt="e-nubes logo" class="big" src="https://res.cloudinary.com/dabfgycqz/image/upload/v1668869407/logo_enubes_white_e35e0ad95b.png?updated_at=2022-11-19T14:50:04.191Z" style="display: block; height: auto; border: 0; width: 344px; max-width: 100%;" title="e-nubes logo" width="344" /></a></div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="social_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:28px;text-align:center;">
                                                                  <div class="alignment" style="text-align:center;">
                                                                      <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="156px">
                                                                          <tr>
                                                                              <td style="padding:0 10px 0 10px;"><a href="https://www.facebook.com/enubesimpregnaty.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://res.cloudinary.com/dabfgycqz/image/upload/v1668869407/facebook2x_c9dcedbc67.png?updated_at=2022-11-19T14:50:04.047Z" style="display: block; height: auto; border: 0;" title="Facebook" width="32" /></a></td>
                                                                              <td style="padding:0 10px 0 10px;"><a href="https://www.instagram.com/impregnatyenubes/" target="_blank"><img alt="Instagram" height="32" src="https://res.cloudinary.com/dabfgycqz/image/upload/v1668869407/instagram2x_ad55808ea2.png?updated_at=2022-11-19T14:50:03.966Z" style="display: block; height: auto; border: 0;" title="Instagram" width="32" /></a></td>
                                                                              <td style="padding:0 10px 0 10px;"><a href="https://www.youtube.com/channel/UCuj1rMGlA0gQVI5VF9JYaig/featured" target="_blank"><img alt="YouTube" height="32" src="https://res.cloudinary.com/dabfgycqz/image/upload/v1668869407/youtube2x_74ebceafdc.png?updated_at=2022-11-19T14:50:03.992Z" style="display: block; height: auto; border: 0;" title="YouTube" width="32" /></a></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:15px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div class="" style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;">
                                                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;"><span style="color:#95979c;font-size:12px;">Ta wiadomość została wygenerowana automatycznie, prosimy na nią nie odpowiadać.</span></p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:25px;">
                                                                  <div align="center" class="alignment">
                                                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                          <tr>
                                                                              <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #555961;"><span> </span></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table border="0" cellpadding="0" cellspacing="0" class="text_block block-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:30px;padding-left:40px;padding-right:40px;padding-top:20px;">
                                                                  <div style="font-family: sans-serif">
                                                                      <div class="" style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
                                                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;"><span style="color:#95979c;font-size:12px;">E-nubes Copyright © 2022</span></p>
                                                                      </div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table><!-- End -->
  </body>
  </html>
    `,
};

const emailTemplateMessage = {
  subject: 'Nowa wiadomość od <%= data.name %>',
  text: `Nowa wiadomość`,
  html: `<!DOCTYPE html>
  <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
      <title></title>
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
      <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
      <!--[if mso]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:PixelsPerInch>96</o:PixelsPerInch>
          <o:AllowPNG/>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <style>
        * {
        box-sizing: border-box;
        }
        body {
        margin: 0;
        padding: 0;
        }
        a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
        }
        #MessageViewBody a {
        color: inherit;
        text-decoration: none;
        }
        p {
        line-height: inherit
        }
        .desktop_hide,
        .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
        }
        @media (max-width:645px) {
        .desktop_hide table.icons-inner,
        .social_block.desktop_hide .social-table {
        display: inline-block !important;
        }
        .icons-inner {
        text-align: center;
        }
        .icons-inner td {
        margin: 0 auto;
        }
        .image_block img.big,
        .row-content {
        width: 100% !important;
        }
        .mobile_hide {
        display: none;
        }
        .stack .column {
        width: 100%;
        display: block;
        }
        .mobile_hide {
        min-height: 0;
        max-height: 0;
        max-width: 0;
        overflow: hidden;
        font-size: 0px;
        }
        .desktop_hide,
        .desktop_hide table {
        display: table !important;
        max-height: none !important;
        }
        }
      </style>
    </head>
    <body style="background-color: #f8f8f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;" width="100%">
        <tbody>
          <tr>
            <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1aa19c;" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1aa19c; color: #000000; width: 625px;" width="625">
                        <tbody>
                          <tr>
                            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                              <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tr>
                                  <td class="pad">
                                    <div align="center" class="alignment">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #1AA19C;"><span> </span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff;" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 625px;" width="625">
                        <tbody>
                          <tr>
                            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                              <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tr>
                                  <td class="pad" style="padding-bottom:20px;padding-top:20px;width:100%;padding-right:0px;padding-left:0px;">
                                    <div align="center" class="alignment" style="line-height:10px"><img alt="I'm an image" src="https://res.cloudinary.com/dabfgycqz/image/upload/v1668869407/logo_enubes_pl_bec97fb420.png?updated_at=2022-11-19T14:50:04.235Z" style="display: block; height: auto; border: 0; width: 250px; max-width: 100%;" title="I'm an image" width="250"/></div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; color: #000000; width: 625px;" width="625">
                        <tbody>
                          <tr>
                            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                              <table border="0" cellpadding="20" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tr>
                                  <td class="pad">
                                    <div align="center" class="alignment">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span> </span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 625px;" width="625">
                        <tbody>
                          <tr>
                            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                              <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tr>
                                  <td class="pad" style="padding-bottom:12px;padding-top:60px;">
                                    <div align="center" class="alignment">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span> </span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tr>
                                  <td class="pad" style="padding-left:40px;padding-right:40px;width:100%;">
                                    <div align="center" class="alignment" style="line-height:10px"><img alt="I'm an image" class="big" src="https://res.cloudinary.com/dabfgycqz/image/upload/v1668869176/info_image_db30e0059e.jpg?updated_at=2022-11-19T14:46:13.132Z" style="display: block; height: auto; border: 0; width: 344px; max-width: 100%;" title="I'm an image" width="344"/></div>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tr>
                                  <td class="pad" style="padding-top:50px;">
                                    <div align="center" class="alignment">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span> </span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                <tr>
                                  <td class="pad" style="padding-bottom:30px;padding-left:40px;padding-right:40px;padding-top:10px;">
                                    <div style="font-family: sans-serif">
                                      <div class="" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                        <p style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 19.2px;"><span style="font-size:30px;color:#2b303a;"><strong>Otrzymałeś nową wiadomość</strong></span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3fafa; color: #000000; width: 625px;" width="625">
                        <tbody>
                          <tr>
                            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-left: 30px solid #FFFFFF; border-right: 30px solid #FFFFFF; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-bottom: 0px;" width="100%">
                              <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tr>
                                  <td class="pad">
                                    <div align="center" class="alignment">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #1AA19C;"><span> </span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tr>
                                  <td class="pad" style="padding-top:35px;">
                                    <div align="center" class="alignment">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span> </span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                <tr>
                                  <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:15px;">
                                    <div style="font-family: sans-serif">
                                      <div class="" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                        <p style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 19.2px;"><span style="color:#2b303a;font-size:18px;"><strong><%= data.name %></strong></span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                <tr>
                                  <td class="pad" style="padding-bottom:40px;padding-left:30px;padding-right:30px;padding-top:20px;">
                                    <div style="font-family: sans-serif">
                                      <div class="" style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;">
                                        <p style="margin: 0; font-size: 12px; text-align: left; mso-line-height-alt: 22.5px;"><span style="color:#2b303a;font-size:15px;"><%= data.message %></span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 625px;" width="625">
                        <tbody>
                          <tr>
                            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                              <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                <tr>
                                  <td class="pad" style="padding-top:20px;padding-right:30px;padding-bottom:10px;padding-left:30px;">
                                    <div style="color:#000000;font-size:14px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-weight:700;line-height:150%;text-align:center;direction:ltr;letter-spacing:0px;mso-line-height-alt:21px;">
                                      <p style="margin: 0;">Aby odpowiedzieć na wiadomość, kliknij adres e-mail poniżej: </p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                <tr>
                                  <td class="pad" style="padding-top:20px;padding-right:30px;padding-bottom:20px;padding-left:30px;">
                                    <div style="color:#107ac2;font-size:14px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-weight:700;line-height:120%;text-align:center;direction:ltr;letter-spacing:0px;mso-line-height-alt:16.8px;">	
                                      <a href="mailto:<%= data.email %>" style="margin: 0;"><%= data.email %></a>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; color: #000000; width: 625px;" width="625">
                        <tbody>
                          <tr>
                            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                              <table border="0" cellpadding="20" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tr>
                                  <td class="pad">
                                    <div align="center" class="alignment">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span> </span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                <tbody>
                  <tr>
                    <td>
                      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #2b303a; color: #000000; width: 625px;" width="625">
                        <tbody>
                          <tr>
                            <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
                              <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tr>
                                  <td class="pad">
                                    <div align="center" class="alignment">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 4px solid #1AA19C;"><span> </span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tr>
                                  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                    <div align="center" class="alignment" style="line-height:10px"><img alt="I'm an image" class="big" src="https://res.cloudinary.com/dabfgycqz/image/upload/v1668869407/footer_5bf10090e5.png?updated_at=2022-11-19T14:50:04.077Z" style="display: block; height: auto; border: 0; width: 625px; max-width: 100%;" title="I'm an image" width="625"/></div>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" class="image_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tr>
                                  <td class="pad" style="padding-bottom:10px;padding-left:60px;padding-right:60px;padding-top:10px;width:100%;">
                                    <div align="center" class="alignment" style="line-height:10px"><a href="https://e-nubes.com/" style="outline:none" tabindex="-1" target="_blank"><img alt="e-nubes logo" class="big" src="https://res.cloudinary.com/dabfgycqz/image/upload/v1668869407/logo_enubes_white_e35e0ad95b.png?updated_at=2022-11-19T14:50:04.191Z" style="display: block; height: auto; border: 0; width: 344px; max-width: 100%;" title="e-nubes logo" width="344"/></a></div>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" class="social_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tr>
                                  <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:28px;text-align:center;">
                                    <div class="alignment" style="text-align:center;">
                                      <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="156px">
                                        <tr>
                                          <td style="padding:0 10px 0 10px;"><a href="https://www.facebook.com/enubesimpregnaty.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://res.cloudinary.com/dabfgycqz/image/upload/v1668869407/facebook2x_c9dcedbc67.png?updated_at=2022-11-19T14:55:14.424Z" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
                                          <td style="padding:0 10px 0 10px;"><a href="https://www.instagram.com/impregnatyenubes/" target="_blank"><img alt="Instagram" height="32" src="https://res.cloudinary.com/dabfgycqz/image/upload/v1668869407/instagram2x_ad55808ea2.png?updated_at=2022-11-19T14:55:20.856Z" style="display: block; height: auto; border: 0;" title="Instagram" width="32"/></a></td>
                                          <td style="padding:0 10px 0 10px;"><a href="https://www.youtube.com/channel/UCuj1rMGlA0gQVI5VF9JYaig/featured" target="_blank"><img alt="YouTube" height="32" src="https://res.cloudinary.com/dabfgycqz/image/upload/v1668869407/youtube2x_74ebceafdc.png?updated_at=2022-11-19T14:55:45.270Z" style="display: block; height: auto; border: 0;" title="YouTube" width="32"/></a></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                <tr>
                                  <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:15px;">
                                    <div style="font-family: sans-serif">
                                      <div class="" style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;">
                                        <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 18px;"><span style="color:#95979c;font-size:12px;">Ta wiadomość została wygenerowana automatycznie, prosimy na nią nie odpowiadać.</span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tr>
                                  <td class="pad" style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:25px;">
                                    <div align="center" class="alignment">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #555961;"><span> </span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" class="text_block block-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                <tr>
                                  <td class="pad" style="padding-bottom:30px;padding-left:40px;padding-right:40px;padding-top:20px;">
                                    <div style="font-family: sans-serif">
                                      <div class="" style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
                                        <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;"><span style="color:#95979c;font-size:12px;">E-nubes Copyright © 2022</span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End -->
    </body>
  </html>`
}

export default {
  contact: async (ctx) => {
    try {
      const { email, phone, name } = JSON.parse(ctx.request.body)
      await strapi.plugins['email'].services.email.sendTemplatedEmail(
        {
          to: 'office@e-nubes.com',
          // from: is not specified, the defaultFrom is used.
        },
          emailTemplateContact,
        {
          data: { email, phone, name }
        }
      );
      ctx.body = 'ok';
    } catch (err) {
      ctx.send({message: 'Something went wrong when sending an e-mail.'}, 400)
    }
  },
  message: async (ctx) => {
    try {
      console.log(ctx.request.body)
      const { email, message, name } = JSON.parse(ctx.request.body)
      await strapi.plugins['email'].services.email.sendTemplatedEmail(
        {
          to: 'office@e-nubes.com',
          // from: is not specified, the defaultFrom is used.
        },
          emailTemplateMessage,
        {
          data: { email, message, name }
        }
      );
      ctx.body = 'ok';
    } catch (err) {
      ctx.send({message: 'Something went wrong when sending an e-mail.'}, 400)
    }
  }
};
