import React from "react";
import { connect} from "react-redux";
import {deleteItem}  from "../store/ProductsStore";
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import {
  usePopupState,
  bindTrigger,
  bindPopover,
} from 'material-ui-popup-state/hooks'
import DeleteIcon from '@material-ui/icons/Delete';

const styles = (theme) => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
})



const Cart = (props) => {

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover',
  })

  return (

    
    <div>
      <Button variant="contained" {...bindTrigger(popupState)}>
        MY CART
      </Button>

      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
       >
          {props.MyCart.cart.map((item, idx) => {
            // eslint-disable-next-line no-lone-blocks
            {
              return (
              <>
             <Typography >
             {item.name} <DeleteIcon onClick={() => props.deleteItem(item)} />
              </Typography>

              </>
              )
            }
          })}
      
      </Popover>
    </div>




    
  );
};

const mapStateToProps = (state) => ({
  MyCart: state.CartReducer,
});

const mapDispatchToProps = { deleteItem };
export default connect(mapStateToProps , mapDispatchToProps)(Cart);
