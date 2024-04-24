<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>        
        <head>
            <style>

            </style>
        </head>
        <body>
            <h1>Titles</h1>
            <div>
                <xsl:value-of select="bookShop/book/title"/>
                <xsl:value-of select="bookShop/book/title"/>
            </div>
            <div>
                <h1>Section 1</h1>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Num Pages</th>
                    </tr>
                    <tr>
                        <td><xsl:value-of select="bookShop/book/title"/></td>
                        <td><xsl:value-of select="bookShop/book/section/chapter/npages"/></td>
                    </tr>
                    <tr>
                        <td><xsl:value-of select="bookShop/book/title"/></td>
                        <td><xsl:value-of select="bookShop/book/section/chapter/npages"/></td>
                    </tr>
                </table>
                <xsl:value-of select="bookShop/book/title"/>
            </div>
            <div>
                <h1>Section 2</h1>
            </div>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>