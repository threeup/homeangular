/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution
{
public:
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
    {
        long factor = 1;
        long sum = 0;
        ListNode *prev = nullptr;
        ListNode *head = nullptr;
        while (l1 || l2 || sum)
        {
            if (l1)
            {
                sum += l1->val * factor;
                l1 = l1->next;
            }
            if (l2)
            {
                sum += l2->val * factor;
                l2 = l2->next;
            }
            int digit = sum;
            if (sum >= 10)
            {
                digit %= 10;
                sum -= digit;
                sum /= 10;
            }
            else
            {
                sum = 0;
            }
            ListNode *current = new ListNode(digit);
            if (!head)
            {
                head = current;
            }
            if (prev)
            {
                prev->next = current;
            }
            prev = current;
        }
        return head;
    }
};