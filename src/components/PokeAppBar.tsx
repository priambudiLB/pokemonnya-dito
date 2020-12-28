/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PokeBallIcon from '../assets/icons/pokeball.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronLeft } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
	})
);

const PokeAppBar = () => {
	const classes = useStyles();
	const router = useRouter();

	const pathname = router.pathname;
	const isMainPage = pathname === '/pokemon';

	const back = () => {
		router.back();
	};

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<div
						css={css`
							flex-grow: 1;
							align-items: center;
						`}
					>
						{/* {!isMainPage && (
							<IconButton onClick={back}>
								<ChevronLeft
									css={css`
										color: white;
									`}
								/>
							</IconButton>
						)} */}
						<Link href='/pokemon'>
							<button
								css={css`
									letter-spacing: 0.1em;
									background: transparent;
									border: none;
									cursor: pointer;
								`}
							>
								<h2
									css={css`
										text-align: left;
										letter-spacing: 0.1em;
										color: white;
									`}
								>
									Pokemon !
								</h2>
							</button>
						</Link>
					</div>

					<Link href={`/mypokemons`}>
						<IconButton color='inherit'>
							<SvgIcon>
								<PokeBallIcon />
							</SvgIcon>
						</IconButton>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default PokeAppBar;