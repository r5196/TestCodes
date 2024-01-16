SELECT user_code, COUNT(*) as total_packed
FROM order_tote_process_log
WHERE action_code = 'PACKED'
AND process_date BETWEEN '2023-11-01 10:00:00' AND '2023-11-01 10:59:59'
GROUP BY user_code;
