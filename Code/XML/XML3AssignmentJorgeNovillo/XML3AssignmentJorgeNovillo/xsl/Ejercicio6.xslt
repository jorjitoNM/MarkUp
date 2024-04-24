<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>        
        <head>
            <style>
                th,td {
                    border: solid 2px white;
                    color:black;
                    padding: 5px;
                    }
                    th {
                    background-color: #BBEC13;
                    }
                    td {
                    background-color: #8CEDB7;
                    }
                    table {
                    border-collapse: collapse;
                    }
            </style>
        </head>
        <body>
            <h1>Titles</h1>
            <div>
                <ol>
                    <li><xsl:value-of select="bookShop/book/title"/></li>
                    <li><xsl:value-of select="bookShop/book/title"/></li>
                    <li><xsl:value-of select="bookShop/book/title"/></li>
                </ol>
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
            </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>