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
                </style>
            </head>
            <body>
                <table>
                    <xsl:apply-templates select="food_list"/>
                </table>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="food_list">
        <tr>
            <th>Food Item</th>
            <th>Carbs (g)</th>
            <th>Fiber (g)</th>
            <th>Fat (g)</th>
            <th>Energy (kj)</th>
        </tr>
        <xsl:apply-templates select="food_item"/>
    </xsl:template>
    <xsl:template match="food_item">
        <tr>
            <td><xsl:apply-templates select="name"/></td>
            <td><xsl:apply-templates select="carbs_per_serving"/></td>
            <td><xsl:apply-templates select="fiber_per_serving"/></td>
            <td><xsl:apply-templates select="fat_per_serving"/></td>
            <td><xsl:apply-templates select="kj_per_serving"/></td>
        </tr>
    </xsl:template>
    <xsl:template match="name">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="carbs_per_serving">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="fiber_per_serving">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="fat_per_serving">
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="kj_per_serving">
        <xsl:value-of select="."/>
    </xsl:template>
</xsl:stylesheet>