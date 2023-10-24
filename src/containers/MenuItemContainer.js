import { connect } from "react-redux"
import { removeItem, updatePrice, updateQuantity } from "../store/items/actions"
import MenuItem from "../components/MenuItem"
import { selectItemTotal, selectSubtotal } from "../store/items/selectors"

const mapStatetoProps = (state, ownProps)=>{
    return {
        total: selectItemTotal(state, ownProps),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        remove: () => dispatch(removeItem(ownProps.uuid)),
        updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
        updateQuantity: (quantity) => dispatch(updateQuantity(ownProps.uuid, quantity)),
    }
}

export const MenuItemContainer = connect(mapStatetoProps, mapDispatchToProps)(MenuItem)