import Button from '@mui/material/Button';
import { SvgIcon } from '@mui/material';

export default function ToggleCountryButton(props) {
   const { toggleCountry } = props;
   return (
      <div>
         <Button onClick={() => toggleCountry()} variant="contained">
            <SvgIcon>
               <svg
                  version="1.1"
                  enableBackground="new 0 0 65 65"
                  y="0px"
                  x="0px"
                  viewBox="0 0 65 65"
               >
                  <g
                     id="Layer_3_copy_2"
                  >
                     <g
                        fill="#FFFFFF"
                     >
                        <path
                           d="m32.5 4.999c-5.405 0-10.444 1.577-14.699 4.282l-5.75-5.75v16.11h16.11l-6.395-6.395c3.18-1.787 6.834-2.82 10.734-2.82 12.171 0 22.073 9.902 22.073 22.074 0 2.899-0.577 5.664-1.599 8.202l4.738 2.762c1.47-3.363 2.288-7.068 2.288-10.964 0-15.164-12.337-27.501-27.5-27.501z"
                        />
                        <path
                           d="m43.227 51.746c-3.179 1.786-6.826 2.827-10.726 2.827-12.171 0-22.073-9.902-22.073-22.073 0-2.739 0.524-5.35 1.439-7.771l-4.731-2.851c-1.375 3.271-2.136 6.858-2.136 10.622 0 15.164 12.336 27.5 27.5 27.5 5.406 0 10.434-1.584 14.691-4.289l5.758 5.759v-16.112h-16.111l6.389 6.388z"
                        />
                     </g>
                  </g>
               </svg>
            </SvgIcon>
         </Button>
      </div>
   )
}