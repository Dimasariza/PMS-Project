<?php

namespace App\Rules\UserTitle;

use App\Enums\AccessTitle;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class AccessNameExists implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $toCheck = match(gettype($value)) {
            'string' => json_decode($value, true),
            'array', 'object' => $value,
        };

        if(!$toCheck) {
            $fail("Invalid json structure");
            return;
        }

        $defaultAccess = AccessTitle::toArrayColumn();

        if(count($defaultAccess) !== count($toCheck)) {
            $fail(sprintf("Total length access title given is not the same, expected %d, got %d", count($defaultAccess), count($value)));
            return;
        }

        foreach ($toCheck as $access => $currValue) {
            if(!in_array($access, $defaultAccess)) {
                $fail("Unknown access type '{$access}'");
                return;
            }

            if(! $this->isBoolean($currValue)) {
                $type = gettype($currValue);
                $fail("Access type value must be boolean, got {$type} '{$currValue}'");
                return;
            }
        }
    }


    /**
     * Check if the value is boolean (boolean could be int 1|0 or true|false).
     *
     * @param  mixed $value
     * @return bool
     */
    protected function isBoolean(mixed $value): bool
    {
        if($value === 0 || $value === 1) {
            return true;
        }

        if(is_bool($value)) {
            return true;
        }

        return false;
    }
}
