const createEmailTemplate = (
    emailFrom: string,
    emailTo: string,
    downloadPageLink: string,
    filename: string,
    fileSize: string
) => {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title></title>
        <!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]-->
        <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
        <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <!--[if !mso]><!-- -->
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <!--<![endif]-->
    </head>
    
    <body>
        <div class="es-wrapper-color">
            <!--[if gte mso 9]>
                    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                        <v:fill type="tile" src="https://tlr.stripocdn.email/content/guids/CABINET_7550686899481ac1ae35908cede0c283/images/group_10_DPF.png" color="#12022f" origin="0.5, 0" position="0.5, 0"></v:fill>
                    </v:background>
                <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" background="https://tlr.stripocdn.email/content/guids/CABINET_7550686899481ac1ae35908cede0c283/images/group_10_DPF.png" style="background-position: center top;">
                <tbody>
                    <tr>
                        <td class="esd-email-paddings" valign="top">
                            <table class="esd-header-popover es-header" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe es-m-p15r es-m-p15l" align="center">
                                            <table class="es-header-body" width="640" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p30t es-p40r es-p40l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr class="es-mobile-hidden">
                                                                                        <td align="center" class="esd-block-spacer" height="15"></td>
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
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe es-m-p15r es-m-p15l" align="center">
                                            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p30t es-p40r es-p40l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer" height="15"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p40 es-m-p30t es-m-p30b es-m-p20r es-m-p20l" align="left" bgcolor="#ffffff" style="background-color: #ffffff; border-radius: 20px 20px 0px 0px;" esd-custom-block-id="468138">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" align="left" class="esd-container-frame">
                                                                            <table cellpadding="0" cellspacing="0" width="100%" background="https://demo.stripocdn.email/content/guids/08ebdca4-d4ee-4e15-adb6-b8b24c0f1432/images/abstractsalesbannerblackbackground_1.jpg" style="background-image: url(https://demo.stripocdn.email/content/guids/08ebdca4-d4ee-4e15-adb6-b8b24c0f1432/images/abstractsalesbannerblackbackground_1.jpg); background-repeat: no-repeat; background-position: left top;">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text">
                                                                                            <h1 style="color: #fff2cc;">Share With Pleasure!&nbsp;</h1>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image es-p20t" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://demo.stripocdn.email/content/guids/08ebdca4-d4ee-4e15-adb6-b8b24c0f1432/images/3132849_37172removebgpreview.png" alt style="display: block;" width="380"></a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-button es-p30">
                                                                                            <!--[if mso]><a href="" target="_blank" hidden>
        <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="" 
                    style="height:62px; v-text-anchor:middle; width:307px" arcsize="50%" strokecolor="#ffdda9" strokeweight="1px" fillcolor="#ffdda9">
            <w:anchorlock></w:anchorlock>
            <center style='color:#000000; font-family:"trebuchet ms", "lucida grande", "lucida sans unicode", "lucida sans", tahoma, sans-serif; font-size:27px; font-weight:700; line-height:27px;  mso-text-raise:1px'>Download Link>></center>
        </v:roundrect></a>
    <![endif]-->
                                                                                            <!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-radius: 34px;"><a href=${downloadPageLink} class="es-button" target="_blank" style="font-size: 28px; border-radius: 34px; font-weight: bold; font-family: &quot;trebuchet ms&quot;, &quot;lucida grande&quot;, &quot;lucida sans unicode&quot;, &quot;lucida sans&quot;, tahoma, sans-serif;">Download Link</a></span>
                                                                                            <!--<![endif]-->
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p30t">
                                                                                            <p style="color: #fff2cc;">Hi <strong>There !</strong>!</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p5t">
                                                                                            <p style="color: #fff2cc;">${emailFrom} Shared a file with you <br> Filename: ${filename} <br> FileSize:${fileSize}😃</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p5t es-p35b">
                                                                                            <p style="color: #ffffff;">Thank you for Our Service!</p>
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
                                                    <tr>
                                                        <td class="esd-structure es-p30t es-p40r es-p40l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer" height="15"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p30t es-p40r es-p40l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer" height="15"></td>
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
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table bgcolor="transparent" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="640" style="background-color: transparent;">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p40t es-p40b es-p20r es-p20l" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-empty-container" style="display: none;"></td>
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
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    
    </html>`
}


export default createEmailTemplate