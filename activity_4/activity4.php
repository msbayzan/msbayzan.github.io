<!DOCTYPE html>
<html lang="en">

<head>
	<title>Yigit&Bayzan</title>
	<meta name="description" content="CENG 311 Inclass Activity 4" />

</head>

<body>
	<?php
	function convertMoney($fromCurrency, $toCurrency, $moneyAmount)
	{
		$conversions = [
			'USD' => ['USD' => 1, 'CAD' => 1.35, 'EUR' => 0.92],
			'CAD' => ['USD' => 0.74, 'CAD' => 1, 'EUR' => 0.68],
			'EUR' => ['USD' => 1.09, 'CAD' => 1.47, 'EUR' => 1]
		];

		return $conversions[$fromCurrency][$toCurrency] * $moneyAmount;
	}

	$convertedMoney = "";

	if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset ($_GET['fromValue'], $_GET['fromCurrency'], $_GET['toCurrency'])) {

		$moneyAmount = floatval($_GET['fromValue']);
		$fromCurrency = isset ($_GET['fromCurrency']) ? preg_replace('/^./', '', $_GET['fromCurrency']) : null;
		$toCurrency = isset ($_GET['toCurrency']) ? preg_replace('/^./', '', $_GET['toCurrency']) : null;

		$convertedMoney = convertMoney($fromCurrency, $toCurrency, $moneyAmount);
	}
	?>

	<form action="activity4.php" method="GET">
		<table>
			<tr>
				<td>
					From:
				</td>
				<td>
					<input type="text" name="fromValue" value="<?php echo isset ($_GET['fromValue']) ? $_GET['fromValue'] : ''; ?>"/>
				</td>
				<td>
					Currency:
				</td>
				<td>
					<select name="fromCurrency">
						<option value="FUSD" /> USD </option>
						<option value="FCAD" /> CAD </option>
						<option value="FEUR" /> EUR </option>
					</select>
				</td>
			</tr>
			<tr>
				<td>
					To:
				</td>
				<td>
					<input type="text" name="toValue" value="<?php echo $convertedMoney; ?>" />
				</td>
				<td>
					Currency:
				</td>
				<td>
					<select name="toCurrency">
						<option value="TUSD" /> USD </option>
						<option value="TCAD" /> CAD </option>
						<option value="TEUR" /> EUR </option>
					</select>
				</td>
			</tr>
			<tr>
				<td>

				</td>
				<td>

				</td>
				<td>

				</td>
				<td>
					<input type="submit" value="convert" />
				</td>
			</tr>
		</table>

	</form>
</body>

</html>