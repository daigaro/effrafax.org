<?php
	function parts() {
		$parts = array();

		if ($handle = opendir("parts")) {
			while (($file = readdir($handle)) !== false) {
				if ($file != '.' && $file != '..') {
					array_push($parts, $file);
				}
			}
			closedir($handle);
		}

		return $parts;
	}
	
	require('smarty/libs/Smarty.class.php');
	$smarty = new Smarty();
	$smarty->setTemplateDir('smarty/templates');
	$smarty->setCompileDir('smarty/templates_c');
	$smarty->setCacheDir('smarty/cache');
	$smarty->setConfigDir('smarty/configs');
	
	$smarty->assign('parts', parts());
	$smarty->display('index.tpl');
?>
