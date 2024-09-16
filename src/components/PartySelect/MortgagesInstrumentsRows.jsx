import React from 'react';

const MortgagesInstrumentsRows = ({ }) => {
    return (
        <>
            <tr >
                <td>ASSUMPTION OF MORTGAGE (ASPM)
                    <input
                        type="checkbox"
                        value="ASPM"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="ASPM"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    MORTGAGER/BORROWER
                    <input
                        type="checkbox"
                        value="MORTGAGER/BORROWER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="ASPM"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    MORTGAGEE/LENDER
                    <input
                        type="checkbox"
                        value="MORTGAGEE/LENDER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="ASPM"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>ASSIGNMENT, MORTGAGE (ASST)
                    <input
                        type="checkbox"
                        value="ASST"
                        checked
                        onChange
                        data-column="doc_type"
                        data-doc-type="ASST"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    ASSIGNOR/OLD LENDER
                    <input
                        type="checkbox"
                        value="ASSIGNOR/OLD LENDER"
                        checked
                        onChange
                        data-column="party1_type"
                        data-doc-type="ASST"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    ASSIGNEE/NEW LENDER
                    <input
                        type="checkbox"
                        value="ASSIGNEE/NEW LENDER"
                        checked
                        onChange
                        data-column="party2_type"
                        data-doc-type="ASST"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>CERTIFICATE OF REDUCTION (CERR)
                    <input
                        type="checkbox"
                        value="CERR"
                        checked
                        onChange
                        data-row="CERR"
                        data-column="doc_type"
                        data-doc-type="CERR"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    MORTGAGER/BORROWER
                    <input
                        type="checkbox"
                        value="MORTGAGER/BORROWER"
                        checked
                        onChange
                        data-row="CERR"
                        data-column="party1_type"
                        data-doc-type="CERR"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    MORTGAGEE/LENDER
                    <input
                        type="checkbox"
                        value="MORTGAGEE/LENDER"
                        checked
                        onChange
                        data-row="CERR"
                        data-column="party2_type"
                        data-doc-type="CERR"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>DECLARATION OF MODIFI OF MRT (DEMM)
                    <input
                        type="checkbox"
                        value="DEMM"
                        checked
                        onChange
                        data-row="DEMM"
                        data-column="doc_type"
                        data-doc-type="DEMM"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    MORTGAGER/BORROWER
                    <input
                        type="checkbox"
                        value="MORTGAGER/BORROWER"
                        checked
                        onChange
                        data-row="DEMM"
                        data-column="party1_type"
                        data-doc-type="DEMM"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    MORTGAGEE/LENDER
                    <input
                        type="checkbox"
                        value="MORTGAGEE/LENDER"
                        checked
                        onChange
                        data-row="DEMM"
                        data-column="party2_type"
                        data-doc-type="DEMM"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>MASTER MORTGAGE (MMTG)
                    <input
                        type="checkbox"
                        value="MMTG"
                        checked
                        onChange
                        data-row="MMTG"
                        data-column="doc_type"
                        data-doc-type="MMTG"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    MORTGAGEE/LENDER
                    <input
                        type="checkbox"
                        value="MORTGAGEE/LENDER"
                        checked
                        onChange
                        data-row="MMTG"
                        data-column="party1_type"
                        data-doc-type="MMTG"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    NOT APPLICABLE
                </td>
            </tr>
            <tr >
                <td>MORTGAGE (MTGE)
                    <input
                        type="checkbox"
                        value="MTGE"
                        checked
                        onChange
                        data-row="MTGE"
                        data-column="doc_type"
                        data-doc-type="MTGE"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"

                    />
                </td>
                <td className="party1">
                    MORTGAGOR/BORROWER
                    <input
                        type="checkbox"
                        value="MORTGAGOR/BORROWER"
                        checked
                        onChange
                        data-row="MTGE"
                        data-column="party1_type"
                        data-doc-type="MTGE"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    MORTGAGEE/LENDER
                    <input
                        type="checkbox"
                        value="MORTGAGEE/LENDER"
                        checked
                        onChange
                        data-row="MTGE"
                        data-column="party2_type"
                        data-doc-type="MTGE"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>PARTIAL SATISFACTION (PSAT)
                    <input
                        type="checkbox"
                        value="PSAT"
                        checked
                        onChange
                        data-row="PSAT"
                        data-column="doc_type"
                        data-doc-type="PSAT"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    MORTGAGER/BORROWER
                    <input
                        type="checkbox"
                        value="MORTGAGOR/BORROWER"
                        checked
                        onChange
                        data-row="PSAT"
                        data-column="party1_type"
                        data-doc-type="PSAT"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    MORTGAGEE/LENDER
                    <input
                        type="checkbox"
                        value="MORTGAGEE/LENDER"
                        checked
                        onChange
                        data-row="PSAT"
                        data-column="party2_type"
                        data-doc-type="PSAT"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>RELEASE (REL)
                    <input
                        type="checkbox"
                        value="REL"
                        checked
                        onChange
                        data-row="REL"
                        data-column="doc_type"
                        data-doc-type="REL"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY 1
                    <input
                        type="checkbox"
                        value="PARTY 1"
                        checked
                        onChange
                        data-row="REL"
                        data-column="party1_type"
                        data-doc-type="REL"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    PARTY 2
                    <input
                        type="checkbox"
                        value="PARTY 2"
                        checked
                        onChange
                        data-row="REL"
                        data-column="party2_type"
                        data-doc-type="REL"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>SATISFACTION OF MORTGAGE (SAT)
                    <input
                        type="checkbox"
                        value="SAT"
                        checked
                        onChange
                        data-row="SAT"
                        data-column="doc_type"
                        data-doc-type="SAT"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    MORTGAGER/BORROWER
                    <input
                        type="checkbox"
                        value="MORTGAGER/BORROWER"
                        checked
                        onChange
                        data-row="SAT"
                        data-column="party1_type"
                        data-doc-type="SAT"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    MORTGAGEE/LENDER
                    <input
                        type="checkbox"
                        value="MORTGAGEE/LENDER"
                        checked
                        onChange
                        data-row="SAT"
                        data-column="party2_type"
                        data-doc-type="SAT"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>SUNDRY MORTGAGE (SMTG)
                    <input
                        type="checkbox"
                        value="SMTG"
                        checked
                        onChange
                        data-row="SMTG"
                        data-column="doc_type"
                        data-doc-type="SMTG"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    MORTGAGER/BORROWER
                    <input
                        type="checkbox"
                        value="MORTGAGER/BORROWER"
                        checked
                        onChange
                        data-row="SMTG"
                        data-column="party1_type"
                        data-doc-type="SMTG"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    MORTGAGEE/LENDER
                    <input
                        type="checkbox"
                        value="MORTGAGEE/LENDER"
                        checked
                        onChange
                        data-row="SMTG"
                        data-column="party2_type"
                        data-doc-type="SMTG"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>WITHHELD SATISFACTION (WSAT)
                    <input
                        type="checkbox"
                        value="WSAT"
                        checked
                        onChange
                        data-row="WSAT"
                        data-column="doc_type"
                        data-doc-type="WSAT"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    MORTGAGER/BORROWER
                    <input
                        type="checkbox"
                        value="MORTGAGER/BORROWER"
                        checked
                        onChange
                        data-row="WSAT"
                        data-column="party1_type"
                        data-doc-type="WSAT"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    MORTGAGEE/LENDER
                    <input
                        type="checkbox"
                        value="MORTGAGEE/LENDER"
                        checked
                        onChange
                        data-row="WSAT"
                        data-column="party2_type"
                        data-doc-type="WSAT"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>ASSIGNMENT OF LEASES AND RENTS (AL&R)
                    <input
                        type="checkbox"
                        value="AL&R"
                        checked
                        onChange
                        data-row="AL&R"
                        data-column="doc_type"
                        data-doc-type="AL&R"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    ASSIGNOR
                    <input
                        type="checkbox"
                        value="ASSIGNOR"
                        checked
                        onChange
                        data-row="AL&R"
                        data-column="party1_type"
                        data-doc-type="AL&R"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    ASSIGNEE
                    <input
                        type="checkbox"
                        value="ASSIGNEE"
                        checked
                        onChange
                        data-row="AL&R"
                        data-column="party2_type"
                        data-doc-type="AL&R"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>ADDITIONAL MORTGAGE TAX (AMTX)
                    <input
                        type="checkbox"
                        value="AMTX"
                        checked
                        onChange
                        data-row="AMTX"
                        data-column="doc_type"
                        data-doc-type="AMTX"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    PAYER
                    <input
                        type="checkbox"
                        value="PAYER"
                        checked
                        onChange
                        data-row="AMTX"
                        data-column="party1_type"
                        data-doc-type="AMTX"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    PARTY TWO
                    <input
                        type="checkbox"
                        value="PARTY TWO"
                        checked
                        onChange
                        data-row="AMTX"
                        data-column="party2_type"
                        data-doc-type="AMTX"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>ASGN OF ASGN OF L&R (AALR)
                    <input
                        type="checkbox"
                        value="AALR"
                        checked
                        onChange
                        data-row="AALR"
                        data-column="doc_type"
                        data-doc-type="AALR"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    ASSIGNOR
                    <input
                        type="checkbox"
                        value="ASSIGNOR"
                        checked
                        onChange
                        data-row="AALR"
                        data-column="party1_type"
                        data-doc-type="AALR"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    ASSIGNEE
                    <input
                        type="checkbox"
                        value="ASSIGNEE"
                        checked
                        onChange
                        data-row="AALR"
                        data-column="party2_type"
                        data-doc-type="AALR"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>MORTGAGE AND CONSOLIDATION (M&CON)
                    <input
                        type="checkbox"
                        value="M&CON"
                        checked
                        onChange
                        data-row="M&CON"
                        data-column="doc_type"
                        data-doc-type="M&CON"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    MORTGAGOR
                    <input
                        type="checkbox"
                        value="MORTGAGOR"
                        checked
                        onChange
                        data-row="M&CON"
                        data-column="party1_type"
                        data-doc-type="M&CON"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    MORTGAGEE
                    <input
                        type="checkbox"
                        value="MORTGAGEE"
                        checked
                        onChange
                        data-row="M&CON"
                        data-column="party2_type"
                        data-doc-type="M&CON"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>MORTGAGE SPREADER AGREEMENT (SPRD)
                    <input
                        type="checkbox"
                        value="SPRD"
                        checked
                        onChange
                        data-row="SPRD"
                        data-column="doc_type"
                        data-doc-type="SPRD"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY ONE/MORTGAGOR
                    <input
                        type="checkbox"
                        value="PARTY ONE/MORTGAGOR"
                        checked
                        onChange
                        data-row="SPRD"
                        data-column="party1_type"
                        data-doc-type="SPRD"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"

                    />
                </td>
                <td className="party2">
                    PARTY TWO/MORTGAGEE
                    <input
                        type="checkbox"
                        value="PARTY TWO/MORTGAGEE"
                        checked
                        onChange
                        data-row="SPRD"
                        data-column="party2_type"
                        data-doc-type="SPRD"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"

                    />
                </td>
            </tr>
            <tr >
                <td>SUBORDINATION OF MORTGAGE (SUBM)
                    <input
                        type="checkbox"
                        value="SUBM"
                        checked
                        onChange
                        data-row="SUBM"
                        data-column="doc_type"
                        data-doc-type="SUBM"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY ONE
                    <input
                        type="checkbox"
                        value="PARTY ONE"
                        checked
                        onChange
                        data-row="SUBM"
                        data-column="party1_type"
                        data-doc-type="SUBM"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"

                    />
                </td>
                <td className="party2">
                    PARTY TWO
                    <input
                        type="checkbox"
                        value="PARTY TWO"
                        checked
                        onChange
                        data-row="SUBM"
                        data-column="party2_type"
                        data-doc-type="SUBM"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"

                    />
                </td>
            </tr>
            <tr >
                <td>PARTIAL RELEASE OF MORTGAGE (PREL)
                    <input
                        type="checkbox"
                        value="PREL"
                        checked
                        onChange
                        data-row="PREL"
                        data-column="doc_type"
                        data-doc-type="PREL"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    PARTY ONE
                    <input
                        type="checkbox"
                        value="PARTY ONE"
                        checked
                        onChange
                        data-row="PREL"
                        data-column="party1_type"
                        data-doc-type="PREL"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"

                    />
                </td>
                <td className="party2">
                    PARTY TWO
                    <input
                        type="checkbox"
                        value="PARTY TWO"
                        checked
                        onChange
                        data-row="PREL"
                        data-column="party2_type"
                        data-doc-type="PREL"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"

                    />
                </td>
            </tr>
            <tr >
                <td>CORRECTION MORTGAGE (CORRM)
                    <input
                        type="checkbox"
                        value="CORRM"
                        checked
                        onChange
                        data-row="CORRM"
                        data-column="doc_type"
                        data-doc-type="CORRM"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    MORTGAGOR/BORROWER
                    <input
                        type="checkbox"
                        value="MORTGAGOR/BORROWER"
                        checked
                        onChange
                        data-row="CORRM"
                        data-column="party1_type"
                        data-doc-type="CORRM"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"

                    />
                </td>
                <td className="party2">
                    MORTGAGEE/LENDER
                    <input
                        type="checkbox"
                        value="MORTGAGEE/LENDER"
                        checked
                        onChange
                        data-row="CORRM"
                        data-column="party2_type"
                        data-doc-type="CORRM"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>APPRT BREAKDWN OFFICE USE ONLY (XXXX)
                    <input
                        type="checkbox"
                        value="XXXX"
                        checked
                        onChange
                        data-row="XXXX"
                        data-column="doc_type"
                        data-doc-type="XXXX"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    MORTGAGOR
                    <input
                        type="checkbox"
                        value="MORTGAGOR"
                        checked
                        onChange
                        data-row="XXXX"
                        data-column="party1_type"
                        data-doc-type="XXXX"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    MORTGAGEE
                    <input
                        type="checkbox"
                        value="MORTGAGEE"
                        checked
                        onChange
                        data-row="XXXX"
                        data-column="party2_type"
                        data-doc-type="XXXX"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>COLLATERAL MORTGAGE (CMTG)
                    <input
                        type="checkbox"
                        value="CMTG"
                        checked
                        onChange
                        data-row="CMTG"
                        data-column="doc_type"
                        data-doc-type="CMTG"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    MORTGAGOR
                    <input
                        type="checkbox"
                        value="MORTGAGOR"
                        checked
                        onChange
                        data-row="CMTG"
                        data-column="party1_type"
                        data-doc-type="CMTG"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    MORTGAGEE
                    <input
                        type="checkbox"
                        value="MORTGAGEE"
                        checked
                        onChange
                        data-row="CMTG"
                        data-column="party2_type"
                        data-doc-type="CMTG"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
            <tr >
                <td>APP. ORDER BREAKDWN OFFICE USE (APPRT)
                    <input
                        type="checkbox"
                        value="APPRT"
                        checked
                        onChange
                        data-row="APPRT"
                        data-column="doc_type"
                        data-doc-type="APPRT"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                    />
                </td>
                <td className="party1">
                    MORTGAGER/BORROWER
                    <input
                        type="checkbox"
                        value="MORTGAGER/BORROWER"
                        checked
                        onChange
                        data-row="APPRT"
                        data-column="party1_type"
                        data-doc-type="APPRT"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
                <td className="party2">
                    MORTGAGEE
                    <input
                        type="checkbox"
                        value="MORTGAGEE/LENDER"
                        checked
                        onChange
                        data-row="APPRT"
                        data-column="party2_type"
                        data-doc-type="APPRT"
                        data-class-code-description="MORTGAGES & INSTRUMENTS"
                        className="toggle-self"
                    />
                </td>
            </tr>
        </>
    );
};

export default MortgagesInstrumentsRows;