import React from "react";

export class SkillsSvg extends React.Component {
	constructor(props) {
		super(props);
		const {section} = props;
		this.state = {section};
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		['section'].forEach(key => {
			if (this.state[key] !== nextProps[key]) {
				if (key==='section') {
					if (this.state.section===0&&nextProps.section===1) {
						setTimeout(() => {
							this.setState({active:true});
						}, 500);
					} else {
						this.setState({active:false});
					}
				}
				this.setState({[key]:nextProps[key]});
			}
		});
		if (!this.state.userInfo && nextProps.userInfo) {
			this.setState({userInfo:nextProps.userInfo})
		}
	}

	render () {
		const {active} = this.state;
		return (
			<svg id='svgSkills' className={`${active?'active':''}`} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="586px" height="920px" viewBox="0 0 586 920">
				<defs>
				<image id="rocket_pixel_png" x="0" y="0" width="19" height="19" href="/icon/rocket-pixel.png"/>
	
				<image id="baby_pixel_png" x="0" y="0" width="19" height="19" href="/icon/baby-pixel.png"/>
	
				<image id="heart_pixel_png" x="0" y="0" width="19" height="19" href="/icon/heart-pixel.png"/>
	
				<image id="skills_profile_picture_png" x="0" y="0" width="340" height="400" href="/icon/skills-profile-picture.png"/>
	
				<g id="Layer0_0_FILL">
				<path fill="#2A92D9" fillOpacity="0.14901960784313725" stroke="none" d="
				M 237.5 543.95
				L 223.5 529.95 20.05 529.95 7.05 542.95 7.05 888.4 21.55 902.9 121.05 902.9 133.05 914.9 567 914.9 581 900.9 581 597.95 566.5 583.45 478.5 583.45 465.5 570.45 237.5 570.45 237.5 543.95
				M 362.5 271.45
				L 350 258.95 237.5 258.95 237.5 231.95 225 219.45 19.05 219.45 18.8 219.2 7.55 230.45 7.55 498.45 20.55 511.45 232.5 511.45 254 532.95 254 551.45 467.5 551.45 477.5 541.45 569 541.45 580 530.45 580 282.95 568.5 271.45 362.5 271.45
				M 173.55 64.05
				L 162.55 53.05 162.55 17.55 149.05 4.05 19.55 4.05 6.55 17.05 6.55 187.05 18.55 199.05 173.55 199.05 173.55 101.55 173.55 64.05
				M 569.5 187.55
				L 580.5 176.55 580.5 128.05 566 113.55 306 113.55 294 101.55 173.55 101.55 173.55 199.05 228.5 199.05 240 187.55 569.5 187.55 Z"/>
				</g>

				<g id="Layer0_7_FILL">
				<path fill="#2A92D9" fillOpacity="0.2" stroke="none" d="
				M 20.35 220.5
				L 8.55 232.3 8.55 260.2 235.9 260.2 235.9 232.65 224.45 220.5 20.35 220.5 Z"/>
				</g>

				<g id="Layer0_9_FILL">
				<path fill="#2A92D9" fillOpacity="0.2" stroke="none" d="
				M 578.1 370.05
				L 578.1 337.55 9.75 337.55 9.75 370.05 578.1 370.05 Z"/>
				</g>

				<g id="Layer0_10_FILL">
				<path fill="#2A92D9" fillOpacity="0.2" stroke="none" d="
				M 578.1 370.05
				L 578.1 337.55 9.75 337.55 9.75 370.05 578.1 370.05 Z"/>
				</g>

				<g id="Layer0_15_FILL">
				<path fill="#2A92D9" fillOpacity="0.2" stroke="none" d="
				M 235.85 543.35
				L 222.9 530.4 21.1 530.4 8.5 543 8.5 570.9 235.85 570.9 235.85 543.35 Z"/>
				</g>

				<g id="Layer0_16_FILL">
				<path fill="#2A92D9" fillOpacity="0.14901960784313725" stroke="none" d="
				M 103.75 619.6
				L 89.6 605.5 35.75 605.5 19.25 622 19.25 673.7 35.5 690 89.9 690 103.75 676.15 103.75 619.6 Z"/>
				</g>

				<g id="Layer0_17_FILL">
				<path fill="#2A92D9" fillOpacity="0.14901960784313725" stroke="none" d="
				M 103.75 619.6
				L 89.6 605.5 35.75 605.5 19.25 622 19.25 673.7 35.5 690 89.9 690 103.75 676.15 103.75 619.6 Z"/>
				</g>

				<g id="Layer0_18_FILL">
				<path fill="#2A92D9" fillOpacity="0.14901960784313725" stroke="none" d="
				M 103.75 619.6
				L 89.6 605.5 35.75 605.5 19.25 622 19.25 673.7 35.5 690 89.9 690 103.75 676.15 103.75 619.6 Z"/>
				</g>

				<g id="Layer0_28_FILL">
				<path fill="#288DDD" stroke="none" d="
				M 819.95 638.6
				L 819.95 650.6 1075.35 650.6 1075.35 638.6 819.95 638.6
				M 819.95 675
				L 819.95 687 1035.35 687 1035.35 675 819.95 675
				M 819.95 603.2
				L 819.95 615.2 1055.35 615.2 1055.35 603.2 819.95 603.2
				M 819.95 568.2
				L 819.95 580.2 1005.35 580.2 1005.35 568.2 819.95 568.2
				M 819.95 532
				L 819.95 544 975.35 544 975.35 532 819.95 532 Z"/>
				</g>

				<g id="Layer0_29_FILL">
				<path fill="#288DDD" fillOpacity="0.14901960784313725" stroke="none" d="
				M 1108.95 406.5
				L 1108.95 394.5 816.95 394.5 816.95 406.5 1108.95 406.5
				M 816.95 466.3
				L 816.95 478.3 1108.95 478.3 1108.95 466.3 816.95 466.3
				M 816.95 429.9
				L 816.95 441.9 1108.95 441.9 1108.95 429.9 816.95 429.9
				M 1108.95 371.5
				L 1108.95 359.5 816.95 359.5 816.95 371.5 1108.95 371.5
				M 1108.95 335.3
				L 1108.95 323.3 816.95 323.3 816.95 335.3 1108.95 335.3 Z"/>
				</g>

				<path id="Layer0_0_1_STROKES" stroke="#288DDD" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" d="
				M 173.55 101.55
				L 294 101.55 306 113.55 566 113.55 580.5 128.05 580.5 176.55 569.5 187.55 240 187.55 228.5 199.05 173.55 199.05 18.55 199.05 6.55 187.05 6.55 17.05 19.55 4.05 149.05 4.05 162.55 17.55 162.55 53.05 173.55 64.05 173.55 101.55 173.55 199.05
				M 19.05 219.45
				L 225 219.45 237.5 231.95 237.5 258.95 350 258.95 362.5 271.45 568.5 271.45 580 282.95 580 530.45 569 541.45 477.5 541.45 467.5 551.45 254 551.45 254 532.95 232.5 511.45 20.55 511.45 7.55 498.45 7.55 230.45 18.8 219.2
				M 20.05 529.95
				L 223.5 529.95 237.5 543.95 237.5 570.45 465.5 570.45 478.5 583.45 566.5 583.45 581 597.95 581 900.9 567 914.9 133.05 914.9 121.05 902.9 21.55 902.9 7.05 888.4 7.05 542.95 20.05 529.95 18.55 529.95"/>

				<font horizAdvX="2048">
				<font-face fontFamily="Arial_Bold" unitsPerEm="2048" ascent="1854" descent="434"/>

				<hkern u1=" " u2="A" k="76"/>

				<hkern u1="1" u2="1" k="113"/>

				<hkern u1="T" u2="A" k="152"/>

				<hkern u1="T" u2="r" k="113"/>

				<glyph unicode="N" horizAdvX="1479" d="
				M 152 0
				L 152 1466 440 1466 1040 487 1040 1466 1315 1466 1315 0 1018 0 427 956 427 0 152 0 Z"/>

				<glyph unicode="a" horizAdvX="1139" d="
				M 357 738
				L 102 784
				Q 145 938 250 1012 355 1086 562 1086 750 1086 842 1041 934 997 972 928 1009 860 1009 677
				L 1006 349
				Q 1006 209 1020 142 1033 76 1070 0
				L 792 0
				Q 781 28 765 83 758 108 755 116 683 46 601 11 519 -24 426 -24 262 -24 168 65 73 154 73 290 73 380 116 450 159 521 237 558 314 596 460 624 657 661 733 693
				L 733 721
				Q 733 802 693 836 653 871 542 871 467 871 425 841 383 812 357 738 Z
				M 733 510
				Q 679 492 562 467 445 442 409 418 354 379 354 319 354 260 398 217 442 174 510 174 586 174 655 224 706 262 722 317 733 353 733 454
				L 733 510 Z"/>

				<glyph unicode="m" horizAdvX="1821" d="
				M 126 1062
				L 385 1062 385 917
				Q 524 1086 716 1086 818 1086 893 1044 968 1002 1016 917 1086 1002 1167 1044 1248 1086 1340 1086 1457 1086 1538 1038 1619 991 1659 899 1688 831 1688 679
				L 1688 0 1407 0 1407 607
				Q 1407 765 1378 811 1339 871 1258 871 1199 871 1147 835 1095 799 1072 729 1049 660 1049 510
				L 1049 0 768 0 768 582
				Q 768 737 753 782 738 827 707 849 675 871 621 871 556 871 504 836 452 801 430 735 407 669 407 516
				L 407 0 126 0 126 1062 Z"/>

				<glyph unicode="e" horizAdvX="1139" d="
				M 762 338
				L 1042 291
				Q 988 137 872 56 755 -24 580 -24 303 -24 170 157 65 302 65 523 65 787 203 936 341 1086 552 1086 789 1086 926 929 1063 773 1057 450
				L 353 450
				Q 356 325 421 255 486 186 583 186 649 186 694 222 739 258 762 338 Z
				M 778 622
				Q 775 744 715 807 655 871 569 871 477 871 417 804 357 737 358 622
				L 778 622 Z"/>

				<glyph unicode=":" horizAdvX="682" d="
				M 201 0
				L 201 281 482 281 482 0 201 0 Z
				M 201 781
				L 201 1062 482 1062 482 781 201 781 Z"/>

				<glyph unicode="S" horizAdvX="1366" d="
				M 74 477
				L 362 505
				Q 388 360 468 292 547 224 682 224 825 224 898 284 970 345 970 426 970 478 940 514 909 551 833 578 781 596 596 642 358 701 262 787 127 908 127 1082 127 1194 191 1291 254 1389 374 1440 493 1491 662 1491 938 1491 1078 1370 1217 1249 1224 1047
				L 928 1034
				Q 909 1147 847 1196 784 1246 659 1246 530 1246 457 1193 410 1159 410 1102 410 1050 454 1013 510 966 726 915 942 864 1046 809 1149 755 1208 660 1266 566 1266 427 1266 301 1196 191 1126 81 998 27 870 -26 679 -26 401 -26 252 102 103 231 74 477 Z"/>

				<glyph unicode="t" horizAdvX="682" d="
				M 634 1062
				L 634 838 442 838 442 410
				Q 442 280 448 258 453 237 473 223 492 209 520 209 559 209 633 236
				L 657 18
				Q 559 -24 435 -24 359 -24 298 1 237 27 209 67 180 108 169 177 160 226 160 375
				L 160 838 31 838 31 1062 160 1062 160 1273 442 1437 442 1062 634 1062 Z"/>

				<glyph unicode="g" horizAdvX="1251" d="
				M 121 -70
				L 442 -109
				Q 450 -165 479 -186 519 -216 605 -216 715 -216 770 -183 807 -161 826 -112 839 -77 839 17
				L 839 172
				Q 713 0 521 0 307 0 182 181 84 324 84 537 84 804 213 945 341 1086 532 1086 729 1086 857 913
				L 857 1062 1120 1062 1120 109
				Q 1120 -79 1089 -172 1058 -265 1002 -318 946 -371 853 -401 759 -431 616 -431 346 -431 233 -339 120 -246 120 -104 120 -90 121 -70 Z
				M 372 553
				Q 372 384 438 305 503 227 599 227 702 227 773 307 844 388 844 546 844 711 776 791 708 871 604 871 503 871 438 792 372 714 372 553 Z"/>

				<glyph unicode="M" horizAdvX="1706" d="
				M 145 0
				L 145 1466 588 1466 854 466 1117 1466 1561 1466 1561 0 1286 0 1286 1154 995 0 710 0 420 1154 420 0 145 0 Z"/>

				<glyph unicode="o" horizAdvX="1251" d="
				M 370 531
				Q 370 373 445 289 520 205 630 205 740 205 815 289 889 373 889 533 889 689 815 773 740 857 630 857 520 857 445 773 370 689 370 531 Z
				M 82 546
				Q 82 686 151 817 220 948 347 1017 473 1086 629 1086 870 1086 1024 929 1178 773 1178 534 1178 293 1023 134 867 -24 631 -24 485 -24 353 42 220 108 151 235 82 363 82 546 Z"/>

				<glyph unicode="d" horizAdvX="1251" d="
				M 1121 0
				L 860 0 860 156
				Q 795 65 707 20 618 -24 528 -24 345 -24 215 123 84 271 84 535 84 805 211 945 338 1086 532 1086 710 1086 840 938
				L 840 1466 1121 1466 1121 0 Z
				M 371 554
				Q 371 384 418 308 486 198 608 198 705 198 773 280 841 363 841 527 841 710 775 790 709 871 606 871 506 871 439 791 371 712 371 554 Z"/>

				<glyph unicode=" " horizAdvX="569"/>

				<glyph unicode="L" horizAdvX="1251" d="
				M 157 0
				L 157 1454 453 1454 453 247 1189 247 1189 0 157 0 Z"/>

				<glyph unicode="r" horizAdvX="797" d="
				M 416 0
				L 135 0 135 1062 396 1062 396 911
				Q 463 1018 517 1052 570 1086 638 1086 734 1086 823 1033
				L 736 788
				Q 665 834 604 834 545 834 504 801 463 769 440 684 416 599 416 328
				L 416 0 Z"/>

				<glyph unicode="n" horizAdvX="1251" d="
				M 1113 0
				L 832 0 832 542
				Q 832 714 814 764 796 815 756 843 715 871 658 871 585 871 527 831 469 791 448 725 426 659 426 481
				L 426 0 145 0 145 1062 406 1062 406 906
				Q 545 1086 756 1086 849 1086 926 1052 1003 1019 1043 967 1082 915 1098 849 1113 783 1113 660
				L 1113 0 Z"/>

				<glyph unicode="i" horizAdvX="569" d="
				M 147 0
				L 147 1062 428 1062 428 0 147 0 Z
				M 147 1206
				L 147 1466 428 1466 428 1206 147 1206 Z"/>

				<glyph unicode="B" horizAdvX="1479" d="
				M 150 1466
				L 736 1466
				Q 910 1466 996 1451 1081 1437 1149 1391 1216 1345 1261 1268 1306 1192 1306 1097 1306 994 1251 908 1195 822 1100 779 1234 740 1306 646 1378 552 1378 425 1378 325 1332 230 1285 136 1205 79 1124 23 1006 10 932 2 649 0
				L 150 0 150 1466 Z
				M 446 639
				L 446 247 720 247
				Q 880 247 923 256 989 268 1031 314 1072 361 1072 439 1072 505 1040 551 1008 597 948 618 887 639 685 639
				L 446 639 Z
				M 446 1222
				L 446 883 640 883
				Q 813 883 855 888 931 897 975 940 1018 984 1018 1055 1018 1123 981 1165 943 1208 869 1217 825 1222 616 1222
				L 446 1222 Z"/>

				<glyph unicode="R" horizAdvX="1479" d="
				M 150 0
				L 150 1466 773 1466
				Q 1008 1466 1115 1426 1221 1387 1285 1286 1349 1185 1349 1055 1349 890 1252 782 1155 675 962 647 1058 591 1121 524 1183 457 1289 286
				L 1468 0 1114 0 900 319
				Q 786 490 744 534 702 579 655 595 608 612 506 612
				L 446 612 446 0 150 0 Z
				M 446 846
				L 665 846
				Q 878 846 931 864 984 882 1014 926 1044 970 1044 1036 1044 1110 1005 1155 965 1201 893 1213 857 1218 677 1218
				L 446 1218 446 846 Z"/>

				<glyph unicode="h" horizAdvX="1251" d="
				M 427 1466
				L 427 927
				Q 563 1086 752 1086 849 1086 927 1050 1005 1014 1045 958 1084 902 1099 834 1113 766 1113 623
				L 1113 0 832 0 832 561
				Q 832 728 816 773 800 818 760 844 719 871 658 871 588 871 533 837 478 803 453 734 427 666 427 532
				L 427 0 146 0 146 1466 427 1466 Z"/>

				<glyph unicode="u" horizAdvX="1251" d="
				M 846 0
				L 846 159
				Q 788 74 694 25 599 -24 494 -24 387 -24 302 23 217 70 179 155 141 240 141 390
				L 141 1062 422 1062 422 574
				Q 422 350 438 299 453 249 494 219 535 190 598 190 670 190 727 229 784 269 805 327 826 386 826 614
				L 826 1062 1107 1062 1107 0 846 0 Z"/>

				<glyph unicode="l" horizAdvX="569" d="
				M 147 0
				L 147 1466 428 1466 428 0 147 0 Z"/>

				<glyph unicode="C" horizAdvX="1479" d="
				M 1087 539
				L 1374 448
				Q 1308 208 1155 91 1001 -25 765 -25 473 -25 285 174 97 374 97 720 97 1086 286 1288 475 1491 783 1491 1052 1491 1220 1332 1320 1238 1370 1062
				L 1077 992
				Q 1051 1106 969 1172 886 1238 768 1238 605 1238 504 1121 402 1004 402 742 402 464 502 346 602 228 762 228 880 228 965 303 1050 378 1087 539 Z"/>

				<glyph unicode="s" horizAdvX="1139" d="
				M 48 303
				L 330 346
				Q 348 264 403 221 458 179 557 179 666 179 721 219 758 247 758 294 758 326 738 347 717 367 644 384 304 459 213 521 87 607 87 760 87 898 196 992 305 1086 534 1086 752 1086 858 1015 964 944 1004 805
				L 739 756
				Q 722 818 675 851 627 884 539 884 428 884 380 853 348 831 348 796 348 766 376 745 414 717 639 666 863 615 952 541 1040 466 1040 332 1040 186 918 81 796 -24 557 -24 340 -24 214 64 87 152 48 303 Z"/>

				<glyph unicode="O" horizAdvX="1593" d="
				M 89 724
				Q 89 948 156 1100 206 1212 293 1301 379 1390 482 1433 619 1491 798 1491 1122 1491 1317 1290 1511 1089 1511 731 1511 376 1318 175 1125 -25 802 -25 475 -25 282 174 89 374 89 724 Z
				M 394 734
				Q 394 485 509 356 624 228 801 228 978 228 1092 355 1205 483 1205 738 1205 990 1095 1114 984 1238 801 1238 618 1238 506 1112 394 987 394 734 Z"/>

				<glyph unicode="f" horizAdvX="682" d="
				M 24 1062
				L 180 1062 180 1142
				Q 180 1276 209 1342 237 1408 314 1449 390 1491 507 1491 627 1491 742 1455
				L 704 1259
				Q 637 1275 575 1275 514 1275 488 1246 461 1218 461 1137
				L 461 1062 671 1062 671 841 461 841 461 0 180 0 180 841 24 841 24 1062 Z"/>

				<glyph unicode="A" horizAdvX="1479" d="
				M 1471 0
				L 1149 0 1021 333 435 333 314 0 0 0 571 1466 884 1466 1471 0 Z
				M 926 580
				L 724 1124 526 580 926 580 Z"/>

				<glyph unicode="U" horizAdvX="1479" d="
				M 147 1466
				L 443 1466 443 672
				Q 443 483 454 427 473 337 545 282 616 228 740 228 866 228 930 279 994 331 1007 406 1020 481 1020 655
				L 1020 1466 1316 1466 1316 696
				Q 1316 432 1292 323 1268 214 1204 139 1139 64 1031 19 923 -25 749 -25 539 -25 431 23 322 72 259 149 196 227 176 312 147 438 147 684
				L 147 1466 Z"/>

				<glyph unicode="T" horizAdvX="1251" d="
				M 479 0
				L 479 1218 44 1218 44 1466 1209 1466 1209 1218 775 1218 775 0 479 0 Z"/>

				<glyph unicode="3" horizAdvX="1139" d="
				M 77 389
				L 349 422
				Q 362 318 419 263 476 208 557 208 644 208 704 274 763 340 763 452 763 558 706 620 649 682 567 682 513 682 438 661
				L 469 890
				Q 583 887 643 939 703 992 703 1079 703 1153 659 1197 615 1241 542 1241 470 1241 419 1191 368 1141 357 1045
				L 98 1089
				Q 125 1222 180 1301 234 1381 332 1426 429 1472 550 1472 757 1472 882 1340 985 1232 985 1096 985 903 774 788 900 761 976 667 1051 573 1051 440 1051 247 910 111 769 -25 559 -25 360 -25 229 89 98 204 77 389 Z"/>

				<glyph unicode="5" horizAdvX="1139" d="
				M 91 377
				L 371 406
				Q 383 311 442 255 501 200 578 200 666 200 727 271 788 343 788 487 788 622 728 689 667 757 570 757 449 757 353 650
				L 125 683 269 1446 1012 1446 1012 1183 482 1183 438 934
				Q 532 981 630 981 817 981 947 845 1077 709 1077 492 1077 311 972 169 829 -25 575 -25 372 -25 244 84 116 193 91 377 Z"/>

				<glyph unicode="," horizAdvX="569" d="
				M 140 281
				L 421 281 421 80
				Q 421 -42 400 -113 379 -183 321 -239 262 -295 172 -327
				L 117 -211
				Q 202 -183 238 -134 274 -85 276 0
				L 140 0 140 281 Z"/>

				<glyph unicode="v" horizAdvX="1139" d="
				M 439 0
				L 11 1062 306 1062 506 520 564 339
				Q 587 408 593 430 607 475 623 520
				L 825 1062 1114 1062 692 0 439 0 Z"/>

				<glyph unicode="w" horizAdvX="1593" d="
				M 345 0
				L 9 1062 282 1062 481 366 664 1062 935 1062 1112 366 1315 1062 1592 1062 1251 0 981 0 798 683 618 0 345 0 Z"/>

				<glyph unicode="b" horizAdvX="1251" d="
				M 414 554
				Q 414 389 466 310 539 198 660 198 753 198 819 277 884 357 884 528 884 710 818 790 752 871 649 871 548 871 481 792 414 714 414 554 Z
				M 135 0
				L 135 1466 416 1466 416 938
				Q 546 1086 724 1086 918 1086 1045 945 1172 805 1172 542 1172 270 1043 123 913 -24 728 -24 637 -24 549 21 460 67 396 156
				L 396 0 135 0 Z"/>

				<glyph unicode="c" horizAdvX="1139" d="
				M 1073 748
				L 796 698
				Q 782 781 733 823 683 865 604 865 499 865 437 792 374 720 374 550 374 361 438 283 501 205 608 205 688 205 739 250 790 296 811 407
				L 1087 360
				Q 1044 170 922 73 800 -24 595 -24 362 -24 224 123 85 270 85 530 85 793 224 939 363 1086 600 1086 794 1086 909 1002 1023 919 1073 748 Z"/>

				<glyph unicode="k" horizAdvX="1139" d="
				M 137 0
				L 137 1466 418 1466 418 688 747 1062 1093 1062 730 674 1119 0 816 0 549 477 418 340 418 0 137 0 Z"/>

				<glyph unicode="y" horizAdvX="1139" d="
				M 14 1062
				L 313 1062 567 308 815 1062 1106 1062 731 40 664 -145
				Q 627 -238 594 -287 560 -336 517 -367 473 -397 410 -414 346 -431 266 -431 185 -431 107 -414
				L 82 -194
				Q 148 -207 201 -207 299 -207 346 -150 393 -92 418 -3
				L 14 1062 Z"/>

				<glyph unicode="." horizAdvX="569" d="
				M 147 0
				L 147 281 428 281 428 0 147 0 Z"/>

				<glyph unicode="p" horizAdvX="1251" d="
				M 139 1062
				L 401 1062 401 906
				Q 452 986 539 1036 626 1086 732 1086 917 1086 1046 941 1175 796 1175 537 1175 271 1045 123 915 -24 730 -24 642 -24 571 11 499 46 420 131
				L 420 -404 139 -404 139 1062 Z
				M 417 549
				Q 417 370 488 284 559 199 661 199 759 199 824 277 889 356 889 535 889 702 822 783 755 864 656 864 553 864 485 784 417 705 417 549 Z"/>

				<glyph unicode="x" horizAdvX="1139" d="
				M 12 0
				L 395 547 28 1062 371 1062 559 770 757 1062 1087 1062 727 559 1120 0 775 0 559 329 341 0 12 0 Z"/>

				<glyph unicode="-" horizAdvX="682" d="
				M 115 391
				L 115 672 667 672 667 391 115 391 Z"/>

				<glyph unicode="H" horizAdvX="1479" d="
				M 150 0
				L 150 1466 446 1466 446 889 1026 889 1026 1466 1322 1466 1322 0 1026 0 1026 641 446 641 446 0 150 0 Z"/>

				<glyph unicode="G" horizAdvX="1593" d="
				M 831 539
				L 831 786 1469 786 1469 202
				Q 1376 112 1200 43 1023 -25 842 -25 612 -25 441 71 270 168 184 347 98 527 98 738 98 967 194 1145 290 1323 475 1418 616 1491 826 1491 1099 1491 1253 1376 1406 1262 1450 1060
				L 1156 1005
				Q 1125 1113 1040 1175 954 1238 826 1238 632 1238 518 1115 403 992 403 750 403 489 519 358 635 228 823 228 916 228 1010 264 1103 301 1170 353
				L 1170 539 831 539 Z"/>

				<glyph unicode="z" horizAdvX="1024" d="
				M 34 0
				L 34 219 432 676
				Q 530 788 577 835 528 832 448 831
				L 73 829 73 1062 951 1062 951 863 545 395 402 240
				Q 519 247 547 247
				L 982 247 982 0 34 0 Z"/>

				<glyph unicode="1" horizAdvX="1139" d="
				M 806 0
				L 525 0 525 1059
				Q 371 915 162 846
				L 162 1101
				Q 272 1137 401 1237 530 1338 578 1472
				L 806 1472 806 0 Z"/>

				<glyph unicode="D" horizAdvX="1479" d="
				M 148 1466
				L 689 1466
				Q 872 1466 968 1438 1097 1400 1189 1303 1281 1206 1329 1065 1377 925 1377 719 1377 538 1332 407 1277 247 1175 148 1098 73 967 31 869 0 705 0
				L 148 0 148 1466 Z
				M 444 1218
				L 444 247 665 247
				Q 789 247 844 261 916 279 964 322 1011 365 1041 463 1071 562 1071 732 1071 902 1041 993 1011 1084 957 1135 903 1186 820 1204 758 1218 577 1218
				L 444 1218 Z"/>

				<glyph unicode="P" horizAdvX="1366" d="
				M 149 0
				L 149 1466 624 1466
				Q 894 1466 976 1444 1102 1411 1187 1300 1272 1190 1272 1015 1272 880 1223 788 1174 696 1099 643 1023 591 945 574 839 553 638 553
				L 445 553 445 0 149 0 Z
				M 445 1218
				L 445 802 607 802
				Q 782 802 841 825 900 848 934 897 967 946 967 1011 967 1091 920 1143 873 1195 801 1208 748 1218 588 1218
				L 445 1218 Z"/>
				</font>
				</defs>

				<g transform="matrix( 1, 0, 0, 1, 0,0) ">
				<use xlinkHref="#Layer0_0_FILL"/>

				<use xlinkHref="#Layer0_0_1_STROKES"/>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 202.55,127.4) ">
				<clipPath id="Mask_Mask_1">
				<rect x="-2" y="-2" width="47" height="19.6" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_1)" writingMode="lr"><tspan x="0" y="12.65" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="14" fill="#27A5E4" xmlSpace="preserve">Name:</tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 319,127.4) ">
				<clipPath id="Mask_Mask_2">
				<rect x="-2" y="-2" width="46.95" height="19.6" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_2)" writingMode="lr"><tspan x="0" y="12.65" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="14" fill="#27A5E4" xmlSpace="preserve">Stage:</tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 432.5,127.4) ">
				<clipPath id="Mask_Mask_3">
				<rect x="-2" y="-2" width="49.2" height="19.6" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_3)" writingMode="lr"><tspan x="0" y="12.65" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="14" fill="#27A5E4" xmlSpace="preserve">Mode :</tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 430.5,144) ">
				<clipPath id="Mask_Mask_4">
				<rect x="-2" y="-2" width="88.55" height="26.35" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_4)" writingMode="lr"><tspan x="0" y="18.1" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="20" fill="#27A5E4" xmlSpace="preserve">Learning</tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 318.5,144) ">
				<clipPath id="Mask_Mask_5">
				<rect x="-2" y="-2" width="90.8" height="26.35" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_5)" writingMode="lr"><tspan x="0" y="18.1" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="20" fill="#27A5E4" xmlSpace="preserve">Beginner</tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 202.5,144) ">
				<clipPath id="Mask_Mask_6">
				<rect x="-2" y="-2" width="59.7" height="26.35" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_6)" writingMode="lr"><tspan x="0" y="18.1" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="20" fill="#27A5E4" xmlSpace="preserve">Rahul</tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 0,0) ">
				<use xlinkHref="#Layer0_7_FILL"/>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 48.1,229.85) ">
				<clipPath id="Mask_Mask_7">
				<rect x="-2" y="-2" width="166.3" height="26.35" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_7)" writingMode="lr"><tspan x="0" y="18.1" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="20" fill="#27A5E4" xmlSpace="preserve">Courses Offered </tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 0,0) ">
				<use xlinkHref="#Layer0_9_FILL"/>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 0,71.3) ">
				<use xlinkHref="#Layer0_10_FILL"/>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 91.55,540.85) ">
				<clipPath id="Mask_Mask_8">
				<rect x="-2" y="-2" width="75.3" height="26.35" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_8)" writingMode="lr"><tspan x="0" y="18.1" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="20" fill="#27A5E4" xmlSpace="preserve">ABOUT</tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 121.05,619.35) ">
				<clipPath id="Mask_Mask_9">
				<rect x="-2" y="-2" width="452.25" height="61.7" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_9)" writingMode="lr"><tspan x="0" y="14.5" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="16" fill="#27A5E4" xmlSpace="preserve">At the age of 35, Rahul visited our website for online</tspan><tspan x="0" y="34.4" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="16" fill="#27A5E4" xmlSpace="preserve"> trading course, which offered him a wide range of courses</tspan><tspan x="0" y="54.3" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="16" fill="#27A5E4" xmlSpace="preserve"> on stock trading, investing, technical analysis, and more.</tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 26,707) ">
				<clipPath id="Mask_Mask_10">
				<rect x="-2" y="-2" width="449.45" height="61.7" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_10)" writingMode="lr"><tspan x="0" y="14.5" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="16" fill="#27A5E4" xmlSpace="preserve">Rahul learned all the courses with passion and dedication,</tspan><tspan x="0" y="34.4" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="16" fill="#27A5E4" xmlSpace="preserve">our courses really took him to the next stage </tspan><tspan x="0" y="54.3" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="16" fill="#27A5E4" xmlSpace="preserve">to explore practical trading.</tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 121.05,792.85) ">
				<clipPath id="Mask_Mask_11">
				<rect x="-2" y="-2" width="447.05" height="81.6" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_11)" writingMode="lr"><tspan x="0" y="14.5" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="16" fill="#27A5E4" xmlSpace="preserve">Now after professional learning, Rahul is looking for new </tspan><tspan x="0" y="34.4" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="16" fill="#27A5E4" xmlSpace="preserve">challenges to work with real-time stock market. </tspan><tspan x="0" y="54.3" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="16" fill="#27A5E4" xmlSpace="preserve">He has no fear as Goodwill offers him customized service </tspan><tspan x="0" y="74.2" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="16" fill="#27A5E4" xmlSpace="preserve">with Rs 11 as brokerage.  </tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 0,0) ">
				<use xlinkHref="#Layer0_15_FILL"/>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 0,0) ">
				<use xlinkHref="#Layer0_16_FILL"/>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 462.95,90.45) ">
				<use xlinkHref="#Layer0_17_FILL"/>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 0,182.45) ">
				<use xlinkHref="#Layer0_18_FILL"/>
				</g>

				<g transform="matrix( 3.60968017578125, 0, 0, 3.60968017578125, 27,798) ">
				<use xlinkHref="#rocket_pixel_png"/>
				</g>

				<g transform="matrix( 3.89471435546875, 0, 0, 3.89471435546875, 24,613) ">
				<use xlinkHref="#baby_pixel_png"/>
				</g>

				<g transform="matrix( 3.6842041015625, 0, 0, 3.6842041015625, 492,705) ">
				<use xlinkHref="#heart_pixel_png"/>
				</g>

				<g transform="matrix( 0.461700439453125, 0, 0, 0.461700439453125, 12,13) ">
				<use xlinkHref="#skills_profile_picture_png"/>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 29,308.35) ">
				<clipPath id="Mask_Mask_12">
				<rect x="-2" y="-2" width="203.2" height="24.1" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_12)" writingMode="lr"><tspan x="0" y="16.3" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="18" fill="#27A5E4" xmlSpace="preserve">Options Trading basics</tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 29,343.85) ">
				<clipPath id="Mask_Mask_13">
				<rect x="-2" y="-2" width="220.2" height="24.1" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_13)" writingMode="lr"><tspan x="0" y="16.3" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="18" fill="#27A5E4" xmlSpace="preserve">Day trading Stock Market</tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 29,378.85) ">
				<clipPath id="Mask_Mask_14">
				<rect x="-2" y="-2" width="234.2" height="24.1" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_14)" writingMode="lr"><tspan x="0" y="16.3" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="18" fill="#27A5E4" xmlSpace="preserve">Advance Option Strategies</tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 29,415.35) ">
				<clipPath id="Mask_Mask_15">
				<rect x="-2" y="-2" width="217.2" height="24.1" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_15)" writingMode="lr"><tspan x="0" y="16.3" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="18" fill="#27A5E4" xmlSpace="preserve">Chart Reading with Price</tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, 29,449.85) ">
				<clipPath id="Mask_Mask_16">
				<rect x="-2" y="-2" width="210.2" height="24.1" fill="#FFFFFF" stroke="none"/>
				</clipPath>

				<text clipPath="url(#Mask_Mask_16)" writingMode="lr"><tspan x="0" y="16.3" baselineShift="0%" kerning="auto" fontFamily="Arial_Bold" fontWeight="bold" fontSize="18" fill="#27A5E4" xmlSpace="preserve">Use volume for success</tspan></text>
				</g>

				<g transform="matrix( 1, 0, 0, 1, -546.95,-221.65) ">
				<use xlinkHref="#Layer0_28_FILL"/>
				</g>

				<g transform="matrix( 1, 0, 0, 1, -543.95,-12.95) ">
				<use xlinkHref="#Layer0_29_FILL"/>
				</g>
			</svg>
		)
	}

}