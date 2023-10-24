import { connect } from "react-redux";
import { Summary } from "../components/Summary";
import { selectSubtotal, selectTipAmount, selectTotal } from "../store/items/selectors";

const mapStatetoProps = (state) => {
    const subtotal = selectSubtotal(state); 
    const tipAmount = selectTipAmount(state);
    const total = selectTotal(state);
    
    return {
        subtotal,
        tipAmount,
        total
    }
}

export const SummaryContainer = connect(mapStatetoProps)(Summary)