import React from 'react';

const DeedsOtherConveyancesRows = ({ }) => {
    return (
        <>
            <tr >
                <td>CONTRACT OF SALE (CNTR)
                    <input
                        type="checkbox"
                        value="CNTR"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="CNTR"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="CNTR"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="CNTR"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>CONDEMNATION PROCEEDINGS (CODP)
                    <input
                        type="checkbox"
                        value="CODP"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="CODP"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="CODP"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="CODP"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>COURT ORDER ADVERSE POSSESSION (DCTO)
                    <input
                        type="checkbox"
                        value="DCTO"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="DCTO"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="DCTO"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="DCTO"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>DEED (DEED)
                    <input
                        type="checkbox"
                        value="DEED"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="DEED"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="DEED"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="DEED"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>EASEMENT (EASE)
                    <input
                        type="checkbox"
                        value="EASE"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="EASE"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="EASE"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="EASE"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>IN REM DEED (IDED)
                    <input
                        type="checkbox"
                        value="IDED"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="IDED"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="IDED"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="IDED"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>LEASE (LEAS)
                    <input
                        type="checkbox"
                        value="LEAS"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="LEAS"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    LESSOR/LANDLORD
                    <input
                        type="checkbox"
                        value="LESSOR/LANDLORD"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="LEAS"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    LESSEE/TENANT
                    <input
                        type="checkbox"
                        value="LESSEE/TENANT"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="LEAS"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>LETTERS PATENT (LTPA)
                    <input
                        type="checkbox"
                        value="LTPA"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="LTPA"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="LTPA"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="LTPA"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>SUBORDINATION OF LEASE (SUBL)
                    <input
                        type="checkbox"
                        value="SUBL"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="SUBL"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="SUBL"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="SUBL"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>VACATE ORDER (VAC)
                    <input
                        type="checkbox"
                        value="VAC"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="VAC"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="VAC"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>CONDO DECLARATION (CDEC)
                    <input
                        type="checkbox"
                        value="CDEC"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="CDEC"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="CDEC"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>DEED, OTHER (DEEDO)
                    <input
                        type="checkbox"
                        value="DEEDO"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="DEEDO"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR
                    <input
                        type="checkbox"
                        value="GRANTOR"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="DEEDO"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE
                    <input
                        type="checkbox"
                        value="GRANTEE"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="DEEDO"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>DEVELOPMENT RIGHTS (DEVR)
                    <input
                        type="checkbox"
                        value="DEVR"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="DEVR"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    PARTY ONE
                    <input
                        type="checkbox"
                        value="PARTY ONE"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="DEVR"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    PARTY TWO
                    <input
                        type="checkbox"
                        value="PARTY TWO"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="DEVR"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>DECLARATION OF MERGER (DECM)
                    <input
                        type="checkbox"
                        value="DECM"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="DECM"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    PARTY ONE
                    <input
                        type="checkbox"
                        value="PARTY ONE"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="DECM"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    PARTY TWO
                    <input
                        type="checkbox"
                        value="PARTY TWO"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="DECM"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>MEMORANDUM OF LEASE (MLEA)
                    <input
                        type="checkbox"
                        value="MLEA"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="MLEA"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    LESSOR
                    <input
                        type="checkbox"
                        value="LESSOR"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="MLEA"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    LESSEE
                    <input
                        type="checkbox"
                        value="LESSEE"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="MLEA"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>MEMORANDUM OF CONTRACT (MCON)
                    <input
                        type="checkbox"
                        value="MCON"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="MCON"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    PARTY ONE
                    <input
                        type="checkbox"
                        value="PARTY ONE"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="MCON"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    PARTY TWO
                    <input
                        type="checkbox"
                        value="PARTY TWO"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="MCON"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>ASSIGN/TERM OF CONTRACT/BID (ACON)
                    <input
                        type="checkbox"
                        value="ACON"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="ACON"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    PARTY ONE
                    <input
                        type="checkbox"
                        value="PARTY ONE"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="ACON"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    PARTY TWO
                    <input
                        type="checkbox"
                        value="PARTY TWO"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="ACON"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>CORRECTION DEED (CORRD)
                    <input
                        type="checkbox"
                        value="CORRD"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="CORRD"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="CORRD"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="CORRD"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>CONFIRMATORY DEED (CONDEED)
                    <input
                        type="checkbox"
                        value="CONDEED"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="CONDEED"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="CONDEED"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="CONDEED"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>REAL ESTATE INVESTMENT TRUST DEED (REIT)
                    <input
                        type="checkbox"
                        value="REIT"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="REIT"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="REIT"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="REIT"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>NOTICE OF APPROPRIATION (NAPP)
                    <input
                        type="checkbox"
                        value="NAPP"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="NAPP"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    PARTY ONE
                    <input
                        type="checkbox"
                        value="PARTY ONE"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="NAPP"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    PARTY TWO
                    <input
                        type="checkbox"
                        value="PARTY TWO"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="NAPP"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>CORRECT INDEX/DEED-OFFICE USE (DEED COR)
                    <input
                        type="checkbox"
                        value="DEED COR"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="DEED COR"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR
                    <input
                        type="checkbox"
                        value="GRANTOR"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="DEED COR"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE
                    <input
                        type="checkbox"
                        value="GRANTEE"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="DEED COR"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>LIFE ESTATE DEED (DEED, LE)
                    <input
                        type="checkbox"
                        value="DEED, LE"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="DEED, LE"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="DEED, LE"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="DEED, LE"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party3">
                    LIFE ESTATE RETAINED
                    <input
                        type="checkbox"
                        value="LIFE ESTATE RETAINED"
                        checked
                        onChange
                        data-column="party3_type"
                        data-doc-type="DEED, LE"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>CORRECT LIFE ESTATE OFFICE USE (CORR, LE)
                    <input
                        type="checkbox"
                        value="CORR, LE"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="CORR, LE"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="CORR, LE"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="CORR, LE"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party3">
                    LIFE ESTATE RETAINED
                    <input
                        type="checkbox"
                        value="LIFE ESTATE RETAINED"
                        checked
                        onChange
                        data-column="party3_type"
                        data-doc-type="CORR, LE"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>TIMESHARE DEED (DEED, TS)
                    <input
                        type="checkbox"
                        value="DEED, TS"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="DEED, TS"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="DEED, TS"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="DEED, TS"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>AIR RIGHTS (AIRRIGHT)
                    <input
                        type="checkbox"
                        value="AIRRIGHT"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="AIRRIGHT"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="AIRRIGHT"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="AIRRIGHT"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>SI BILLING UPDATE OFFICE USE (SI CORR)
                    <input
                        type="checkbox"
                        value="SI CORR"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="SI CORR"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR
                    <input
                        type="checkbox"
                        value="GRANTOR"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="SI CORR"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE
                    <input
                        type="checkbox"
                        value="GRANTEE"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="SI CORR"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>DEED, PRE RPT TAX (DEEDP)
                    <input
                        type="checkbox"
                        value="DEEDP"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="DEEDP"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="DEEDP"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="DEEDP"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>TORREN (TORREN)
                    <input
                        type="checkbox"
                        value="TORREN"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="TORREN"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    <em>PARTY  1</em>
                    <aside>note the double space</aside>
                    <input
                        type="checkbox"
                        value="PARTY  1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="TORREN"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    <em>PARTY  2</em>
                    <aside>note the double space</aside>
                    <input
                        type="checkbox"
                        value="PARTY  2"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="TORREN"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>DEED WITH RESTRICTIVE COVENANT (DEED, RC)
                    <input
                        type="checkbox"
                        value="DEED, RC"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="DEED, RC"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    GRANTOR/SELLER
                    <input
                        type="checkbox"
                        value="GRANTOR/SELLER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="DEED, RC"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    GRANTEE/BUYER
                    <input
                        type="checkbox"
                        value="GRANTEE/BUYER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="DEED, RC"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>DECLARATION OF CONDO IN CONDO (SCDEC)
                    <input
                        type="checkbox"
                        value="SCDEC"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="SCDEC"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="SCDEC"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>TRANSFER ON DEATH DEED (TODD)
                    <input
                        type="checkbox"
                        value="TODD"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="TODD"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party1">
                    TRANSFEROR
                    <input
                        type="checkbox"
                        value="TRANSFEROR"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="TODD"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    DESGNTD BENEFICIARY
                    <input
                        type="checkbox"
                        value="DESGNTD BENEFICIARY"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="TODD"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
            <tr >
                <td>REVOCATION OF TOD DEED (RTOD)</td>
                <td className="party1">
                    TRANSFEROR
                    <input
                        type="checkbox"
                        value="TRANSFEROR"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="RTOD"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
                <td className="party2">
                    DESIGNATED BENEFICIARY
                    <input
                        type="checkbox"
                        value="DESGNTD BENEFICIARY"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="RTOD"
                        data-class-code-description="DEEDS AND OTHER CONVEYANCES"
                    />
                </td>
            </tr>
        </>
    );
}

export default DeedsOtherConveyancesRows;