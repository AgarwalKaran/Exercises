<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" encoding="UTF-8" />
    <xsl:template match="/ott_subscription">
        <html>
            <head>
                <title>Subscription Data</title>
                <style>
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        padding: 10px;
                        border: 1px solid black;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>Subscription Data</h1>
                <table>
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Package</th>
                        <th>Status</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Region</th>
                    </tr>
                    <xsl:for-each select="subscription">
                        <tr>
                            <td><xsl:value-of select="user_id" /></td>
                            <td><xsl:value-of select="user_name" /></td>
                            <td><xsl:value-of select="package" /></td>
                            <td><xsl:value-of select="status" /></td>
                            <td><xsl:value-of select="start_date" /></td>
                            <td><xsl:value-of select="end_date" /></td>
                            <td><xsl:value-of select="region" /></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
