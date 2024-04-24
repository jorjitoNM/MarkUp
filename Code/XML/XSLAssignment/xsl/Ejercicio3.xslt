<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    th,td {
                    border: solid 2px white;
                    color:black;
                    padding: 3px 4px;
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
                    * {
                    background-color: blue;
                    }
                </style>
            </head>
            <body>
                <table>
                    <tr>
                        <th>Food Item</th>
                        <th>Carbs (g)</th>
                        <th>Fiber (g)</th>
                        <th>Fat (g)</th>
                        <th>Energy (kj)</th>
                    </tr>
                    <xsl:for-each>
                        <xsl:if condition="[@type = 'vegetable']">
                            <tr>
                                <td><xsl:value-of select="name"/></td>
                                <td><xsl:value-of select="carbs_per_serving"/></td>
                                <td><xsl:value-of select="fiber_per_serving"/></td>
                                <td><xsl:value-of select="fat_per_serving"/></td>
                                <td><xsl:value-of select="kj_per_serving"/></td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>