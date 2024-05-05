import React from "react";
import { Grid } from "@material-ui/core";


const Footer = () => {
	return(
		<React.Fragment>
			<div className="wave2" style={{ padding: "5rem 0 2rem"}}>
				<Grid container justifyContent="center" style={{textAlign: "center"}}>
					<Grid item>
						<h4 style={{color: "#4f4f4f"}}>
						The only way to do great work is to &#9829; what you do.
						</h4>
					</Grid>
				</Grid>
			</div>
		</React.Fragment>
	)
}

export default Footer;