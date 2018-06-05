<?php

require_once 'campaign-monitor/csrest_subscribers.php';

$email = $_GET['email'];
$name = $_GET['name'];

$auth = array('api_key' => 'adba954dc6a9cd66eb8839b484c89815');
$wrap = new CS_REST_Subscribers('2d004c4ea6f4b47704453141de387fbb', $auth);
$result = $wrap->add(array(
    'EmailAddress' => $email,
    'Name' => $name,
    'ConsentToTrack' => 'yes',
    'Resubscribe' => true
));

$data = array(
	'name' => $name,
	'email' => $email,
);




if($result->was_successful()) {
	$data['status'] = 'success';
	echo json_encode($data);
} else {
	$data['status'] = 'fail';
	echo json_encode($data);
}